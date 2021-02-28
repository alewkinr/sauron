package ru.sber.aas21.service;

import com.kinoroy.expo.push.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.domain.model.PushSubscriberEntity;
import ru.sber.aas21.domain.repository.PushSubscriberRepository;
import ru.sber.aas21.exception.CustomException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class ExpoService {

    private static final String TOKEN_FORMAT = "ExponentPushToken[%s]";

    private final PushSubscriberRepository pushSubscriberRepository;
    private final UserService userService;

    public void saveToken(String token) {
        pushSubscriberRepository.findByToken(token).ifPresent(pushSubscriberEntity -> {
            throw new CustomException("Token already exists", HttpStatus.FOUND);
        });

        pushSubscriberRepository.save(new PushSubscriberEntity(userService.findByName(userService.getCurrentUsername()),
                TOKEN_FORMAT.formatted(token)));
    }

    public void sendMessage(String title, String body, HashMap<String, Object> data) {
        Set<String> tokens = pushSubscriberRepository.findAll()
                .parallelStream().map(PushSubscriberEntity::getToken).collect(Collectors.toSet());
        // Sending message
        List<Message> messages = new ArrayList<>();
        // You can check whether your push tokens are syntactically valid

        for (String token : tokens) {
            // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
            if (!ExpoPushClient.isExpoPushToken(token)) {
                System.out.println(token + " is not a valid Expo Push Token!");
            }
        }
        for (String token : tokens) {
            // Construct a message
            Message message = new Message.Builder()
                    .to(token)
                    .title(title)
                    .body(body)
                    .data(data)
                    .build();
            messages.add(message);
        }
        // The Expo push service accepts batches of messages, no more than 100 at a time.
        // If you know you're sending more than 100 messages,
        // Use ExpoPushClient.chunkItems to get lists of 100 or less items
        List<List<Message>> chunks = ExpoPushClient.chunkItems(messages);

        for (List<Message> chunk : chunks) {
            try {
                PushTicketResponse response = ExpoPushClient.sendPushNotifications(chunk);
                List<ExpoError> errors = response.getErrors();
                // If there is an error with the *entire request*:
                // The errors object will be an list of errors,
                // (usually just one)
                if (errors != null) {
                    for (ExpoError error : errors) {
                        log.error(error.getCode() + ": " + error.getMessage());
                    }
                }
                // If there are errors that affect individual messages but not the entire request,
                // errors will be null and each push ticket will individually contain the status
                // of each message (ok or error)
                List<PushTicket> tickets = response.getTickets();
                if (tickets != null) {
                    for (PushTicket ticket : tickets) {
                        // Handle each ticket (namely, check the status, and save the ID!)
                        // NOTE: If a ticket status is error, you can get the specific error
                        // from the details object. You must handle it appropriately.
                        // The error codes are listed in PushError
                        if (ticket.getStatus() == Status.OK) {
                            String id = ticket.getId();
                            // Save this id somewhere for later
                        } else {
                            // Handle the error
                            PushError e = ticket.getDetails().getError();
                            switch (e) {
                                case MESSAGE_TOO_BIG:
                                case INVALID_CREDENTIALS:
                                case DEVICE_NOT_REGISTERED:
                                case MESSAGE_RATE_EXCEEDED:
                            }

                        }
                    }
                }
            } catch (IOException e) {
                // Handle a network error here
                log.error(e.getMessage());
            }
        }
    }

    public void unsubscribe(String token) {
        PushSubscriberEntity pushSubscriberEntity = pushSubscriberRepository.findByToken(token).orElseThrow();
        pushSubscriberRepository.delete(pushSubscriberEntity);
    }
}

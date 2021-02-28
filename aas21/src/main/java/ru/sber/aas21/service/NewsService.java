package ru.sber.aas21.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class NewsService {

    private final ExpoService expoService;

    @Scheduled(fixedDelay = 10000)
    public void scheduleFixedDelayTask() {
        expoService.sendMessage("Новости",
                "Новый выпуск газеты СБЕР.ПРАВДА от " + LocalDate.now().toString(),
                new HashMap<>() {{
                    put("time", LocalDateTime.now());
                }}
        );
    }
}

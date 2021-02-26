package ru.sber.aas21.domain.migration;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.domain.model.Gender;
import ru.sber.aas21.domain.model.Role;
import ru.sber.aas21.domain.model.UserEntity;
import ru.sber.aas21.domain.repository.UserRepository;
import ru.sber.aas21.model.request.UserRegistrationRequest;
import ru.sber.aas21.service.UserService;

import java.time.LocalDate;

@RequiredArgsConstructor
@Transactional
@Component
public class V1_UserMigration implements Migration {

    @Value("${user.birthday.format}")
    private String birthdayFormat;

    private final UserService userService;
    private final UserRepository userRepository;

    @Override
    public String getId() {
        return V1_UserMigration.class.getName();
    }

    @Override
    public void migrate() {
        UserRegistrationRequest userRegistrationRequest = new UserRegistrationRequest();
        userRegistrationRequest.setUsername("user");
        userRegistrationRequest.setPassword("user");
        userRegistrationRequest.setNickname("user");
        userRegistrationRequest.setInn("123456789");
        userRegistrationRequest.setPassportNumber("6334123123");
        userRegistrationRequest.setBirthDay(LocalDate.now());
        userRegistrationRequest.setGender(Gender.FEMALE);
        userRegistrationRequest.setFirstName("Тестовый");
        userRegistrationRequest.setSurname("Пользователь");
        userRegistrationRequest.setLastName("Системы");
        userRegistrationRequest.setPhoneNumber("+7-999-999-99-99");
        userService.signUp(userRegistrationRequest);

        userRegistrationRequest = new UserRegistrationRequest();
        userRegistrationRequest.setUsername("admin");
        userRegistrationRequest.setPassword("admin");
        userRegistrationRequest.setNickname("admin");
        userRegistrationRequest.setPhoneNumber("+7-999-999-99-00");
        userService.signUp(userRegistrationRequest);

        UserEntity admin = userRepository.findByUsername("admin").orElseThrow();
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);
    }
}

package ru.sber.aas21.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.sber.aas21.domain.model.Gender;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserRegistrationRequest {

    private String username;

    private String email;

    private String phoneNumber;

    private String password;

    private String nickname;

    private String firstName;

    private String surname;

    private String lastName;

    private String inn;

    private String passportNumber;

    private String city;

    private Gender gender;

    private LocalDate birthDay;

    private String sberId;
}

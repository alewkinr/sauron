package ru.sber.aas21.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.sber.aas21.domain.model.Gender;
import ru.sber.aas21.domain.model.Role;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {

    private Long id;

    private String username;

    private String nickname;

    private String email;

    private Role role;

    private String phoneNumber;

    private String firstName;

    private String lastName;

    private String surname;

    private String inn;

    private String passportNumber;

    private Gender gender;

    private String birthDay;
}

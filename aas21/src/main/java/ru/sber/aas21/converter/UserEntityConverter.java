package ru.sber.aas21.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.domain.model.UserEntity;
import ru.sber.aas21.model.UserDto;

import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Transactional
@Component
public class UserEntityConverter implements Converter<UserEntity, UserDto> {

    @Value("${user.birthday.format}")
    private String birthdayFormat;

    @Override
    public UserDto convert(MappingContext<UserEntity, UserDto> mappingContext) {
        UserDto userDto = Optional.ofNullable(mappingContext.getDestination()).orElse(new UserDto());
        userDto.setId(mappingContext.getSource().getId());
        userDto.setUsername(mappingContext.getSource().getUsername());
        userDto.setNickname(mappingContext.getSource().getNickname());
        userDto.setEmail(mappingContext.getSource().getEmail());
        userDto.setRole(mappingContext.getSource().getRole());
        userDto.setPhoneNumber(mappingContext.getSource().getPhoneNumber());
        userDto.setFirstName(mappingContext.getSource().getFirstName());
        userDto.setLastName(mappingContext.getSource().getLastName());
        userDto.setSurname(mappingContext.getSource().getSurname());
        userDto.setInn(mappingContext.getSource().getInn());
        userDto.setPassportNumber(mappingContext.getSource().getPassportNumber());
        userDto.setGender(mappingContext.getSource().getGender());
        userDto.setBirthDay(Optional.ofNullable(mappingContext.getSource().getBirthDay()).map(localDate -> localDate.format(DateTimeFormatter.ofPattern(birthdayFormat))).orElse(null));
        userDto.setSberId(mappingContext.getSource().getSberId());

        return userDto;
    }
}

package ru.sber.aas21.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.domain.model.UserEntity;
import ru.sber.aas21.model.request.UserRegistrationRequest;

import java.util.Optional;

@Transactional
@Component
public class UserRegistrationConverter implements Converter<UserRegistrationRequest, UserEntity> {
    @Override
    public UserEntity convert(MappingContext<UserRegistrationRequest, UserEntity> mappingContext) {
        UserEntity user = Optional.ofNullable(mappingContext.getDestination()).orElse(new UserEntity());
        user.setUsername(mappingContext.getSource().getUsername());
        user.setSberId(mappingContext.getSource().getSberId());
        user.setNickname(mappingContext.getSource().getNickname());
        user.setEmail(mappingContext.getSource().getEmail());
        user.setPassword(mappingContext.getSource().getPassword());
        user.setFirstName(mappingContext.getSource().getFirstName());
        user.setLastName(mappingContext.getSource().getLastName());
        user.setSurname(mappingContext.getSource().getSurname());
        user.setInn(mappingContext.getSource().getInn());
        user.setPassportNumber(mappingContext.getSource().getPassportNumber());
        user.setGender(mappingContext.getSource().getGender());
        user.setBirthDay(mappingContext.getSource().getBirthDay());
        user.setPhoneNumber(mappingContext.getSource().getPhoneNumber());
        return user;
    }
}

package ru.sber.aas21.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.configuration.security.JwtTokenProvider;
import ru.sber.aas21.domain.model.Role;
import ru.sber.aas21.domain.model.UserEntity;
import ru.sber.aas21.domain.repository.UserRepository;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.model.UserDto;
import ru.sber.aas21.model.request.SetSberIdRequest;
import ru.sber.aas21.model.request.UserRegistrationRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final ModelMapper modelMapper;

    public UserDto getCurrentUser() {
        try {
            return (UserDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception ignored) {
            return null;
        }
    }

    public String getCurrentUsername() {
        return Optional.ofNullable(getCurrentUser()).map(UserDto::getUsername).orElse(null);
    }

    public String signIn(String username, String password) {
        Optional<UserEntity> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            if (passwordEncoder.matches(password, user.get().getPassword())) {
                return jwtTokenProvider.createToken(user.get().getUsername(), modelMapper.map(user.get(), UserDto.class));
            } else {
                throw new CustomException("Not authorized", HttpStatus.UNAUTHORIZED);
            }
        } else {
            throw new CustomException("User not found", HttpStatus.NOT_FOUND);
        }
    }

    public String signUp(UserRegistrationRequest userRegistrationDto) {
        UserEntity userEntity = modelMapper.map(userRegistrationDto, UserEntity.class);
        if (!userRepository.existsByUsername(userEntity.getUsername())) {
            userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
            userEntity.setRole(Role.USER);
            userRepository.save(userEntity);
            return jwtTokenProvider.createToken(userEntity.getUsername(), modelMapper.map(userEntity, UserDto.class));
        } else {
            throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    public void delete(String username) {
        userRepository.deleteByUsername(username);
    }

    public UserDto search(String username) {
        return modelMapper.map(userRepository.findByUsername(username).orElseThrow(() -> new CustomException("User not found", HttpStatus.NOT_FOUND)), UserDto.class);
    }

    public UserDto whoAmI(HttpServletRequest req) {
        return modelMapper.map(userRepository.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)))
                .orElseThrow(() -> new CustomException("User not found", HttpStatus.NOT_FOUND)), UserDto.class);
    }

    public String refresh(String username) {
        return jwtTokenProvider.createToken(username, modelMapper.map(userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException("User not found", HttpStatus.NOT_FOUND)), UserDto.class));
    }

    public List<UserDto> findAll() {
        return userRepository.findAll().stream().map(userEntity -> modelMapper.map(userEntity, UserDto.class)).collect(Collectors.toList());
    }

    UserEntity findByName(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new CustomException("User not found", HttpStatus.NOT_FOUND));
    }

    public UserDto setSberId(SetSberIdRequest setSberIdRequest) {
        UserEntity userEntity = userRepository.findByUsername(setSberIdRequest.getUsername()).orElseThrow(() -> new CustomException("User not found", HttpStatus.NOT_FOUND));
        if (!getCurrentUsername().equals(userEntity.getUsername())) {
            throw new CustomException("Not Allowed", HttpStatus.FORBIDDEN);
        }
        UserEntity saved = userRepository.save(userEntity);
        userEntity.setSberId(setSberIdRequest.getSberId());
        return modelMapper.map(saved, UserDto.class);
    }
}

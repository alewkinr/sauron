package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.model.UserDto;
import ru.sber.aas21.model.request.SignInRequest;
import ru.sber.aas21.model.request.UserRegistrationRequest;
import ru.sber.aas21.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/signUp")
    public String signUp(@RequestBody UserRegistrationRequest registrationRequest) {
        return userService.signUp(registrationRequest);
    }

    @PostMapping("/signIn")
    public String singIn(@RequestBody SignInRequest signInRequest) {
        return userService.signIn(signInRequest.getUsername(), signInRequest.getPassword());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/whoAmI")
    public ResponseEntity<UserDto> whoAmI(HttpServletRequest request) {
        return ResponseEntity.ok(userService.whoAmI(request));
    }

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/user")
    public ResponseEntity<UserDto> getUserByUsername(@RequestParam(value = "username") String username) {
        return ResponseEntity.ok(userService.search(username));
    }

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public List<UserDto> allUsers() {
        return userService.findAll();
    }

}

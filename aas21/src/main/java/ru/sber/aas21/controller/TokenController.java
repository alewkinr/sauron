package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.service.ExpoService;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/token")
public class TokenController {

    private final ExpoService expoService;

    @PostMapping
    public void token(@RequestBody String token) {
        expoService.saveToken(token);
    }

    @DeleteMapping("/{token}")
    public void unsubscribe(@PathVariable String token){
        expoService.unsubscribe(token);
    }
}

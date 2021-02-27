package ru.sber.aas21.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sber.aas21.exception.CustomException;

@PreAuthorize("permitAll()")
@RestController
@RequestMapping("/api/mock")
public class MockController {

    @GetMapping("/ok")
    public ResponseEntity<String> ok() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/bad")
    public ResponseEntity<String> bad() {
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/error")
    public ResponseEntity<String> error() {
        throw new CustomException("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

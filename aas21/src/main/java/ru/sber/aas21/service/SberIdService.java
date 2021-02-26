package ru.sber.aas21.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional
@Service
public class SberIdService {
    public boolean isValid(String sberId) {
//        TODO Implement this MOCK
        return true;
    }
}

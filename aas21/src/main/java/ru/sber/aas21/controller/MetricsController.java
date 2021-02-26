package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sber.aas21.service.SberCloudEyeService;

import javax.annotation.PostConstruct;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/metrics")
public class MetricsController {

    private final SberCloudEyeService sberCloudEyeService;

    @PostConstruct
    public void init(){
        sberCloudEyeService.getMetrics();
    }
}

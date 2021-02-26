package ru.sber.aas21.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.model.sber.Metrics;
import ru.sber.aas21.util.SberSDKUtils;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class SberCloudEyeService {

    private final SberCloudConfig sberCloudConfig;
    private final SberSDKUtils sberSDKUtils;

    public void getMetrics() {
        String result = sberSDKUtils.call(sberCloudConfig.getCloudEyeEndpoint(), "metrics", SberSDKUtils.Method.GET);
        System.out.println(result);
        try {
            Metrics metrics = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "metrics", SberSDKUtils.Method.GET, Metrics.class);
            System.out.println(metrics);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}

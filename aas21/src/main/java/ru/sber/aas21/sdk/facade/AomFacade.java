package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.apm.QueryList;
import ru.sber.aas21.sdk.util.SberSDKUtils;

@Slf4j
@RequiredArgsConstructor
public class AomFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;


    public QueryList getMetrics(String monitorGroup) {
        String url = "/ats/applications?monitorGroup=%s".formatted(monitorGroup);
        try {
            QueryList services = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "ats/applications",
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + services.toString());
            return services;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

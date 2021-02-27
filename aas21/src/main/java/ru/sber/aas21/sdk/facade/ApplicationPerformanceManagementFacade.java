package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.apm.QueryList;
import ru.sber.aas21.sdk.model.apm.TraceData;
import ru.sber.aas21.sdk.util.SberSDKUtils;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Slf4j
@RequiredArgsConstructor
public class ApplicationPerformanceManagementFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;

    public QueryList getApplications() {
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "atps/monitorgroups",
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getServices() {
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "ats/applications",
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getServiceInstanceList(String application) {
        String url = "/ats/applications/%s/instances".formatted(application);
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), url,
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getTransactionList(String application) {
        String url = "/ats/applications/%s/transactions".formatted(application);
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), url,
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public TraceData getTrace(LocalDateTime startTime, LocalDateTime endTime, String application, String monitorGroup, Integer limit) {
        String url = "ats/traces?startTime=%d&endTime=%d&application=%s&monitorGroup=%s&limit=%d".formatted(
                startTime.toEpochSecond(ZoneOffset.UTC) * 1000, endTime.toEpochSecond(ZoneOffset.UTC) * 1000,
                application, monitorGroup, limit);

        try {
            TraceData traces = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), url,
                    SberSDKUtils.Method.GET, TraceData.class);
            log.debug("Traces: " + traces.toString());
            return traces;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}

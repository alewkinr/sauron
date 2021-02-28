package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.cloudTrace.TraceResponse;
import ru.sber.aas21.sdk.model.cloudTrace.TrackerResponse;
import ru.sber.aas21.sdk.util.SberSDKUtils;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Slf4j
@RequiredArgsConstructor
public class CloudTraceFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;


    public TrackerResponse getTracker(String trackerName) {
        String url = "tracker?tracker_name=%s".formatted(trackerName);
        try {
            TrackerResponse metrics = sberSDKUtils.callForObject(sberCloudConfig.getCloudTraceEndpoint(), url,
                    SberSDKUtils.Method.GET, TrackerResponse.class);
            log.debug("Trackers: " + metrics.toString());
            return metrics;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public TraceResponse getTrace(String trackerName, Integer limit, LocalDateTime from, LocalDateTime to, String traceName,
                                  String resourceType, String serviceType) {
        String url = "%s/trace?limit=%d&to=%d&from=%d&trace_name=%s&resource_type=%s&service_type=%s"
                .formatted(trackerName, limit, from.toEpochSecond(ZoneOffset.UTC) * 1000, to.toEpochSecond(ZoneOffset.UTC) * 1000,
                        traceName, resourceType, serviceType);
        try {
            TraceResponse metrics = sberSDKUtils.callForObject(sberCloudConfig.getCloudTraceEndpoint(), url,
                    SberSDKUtils.Method.GET, TraceResponse.class);
            log.debug("Traces: " + metrics.toString());
            return metrics;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

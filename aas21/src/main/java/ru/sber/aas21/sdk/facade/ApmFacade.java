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
import ru.sber.aas21.sdk.model.apm.TracingDetails;
import ru.sber.aas21.sdk.util.SberSDKUtils;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Slf4j
@RequiredArgsConstructor
public class ApmFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;

    public QueryList getMonitorGroups() {
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), "atps/monitorgroups",
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getServices(String monitorGroup) {
        String url = "/ats/applications?monitorGroup=%s".formatted(monitorGroup);
        try {
            QueryList services = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), url,
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + services.toString());
            return services;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getServiceInstanceList(String application, String monitorGroup) {
        String url = "/ats/applications/%s/instances?monitorGroup=%s".formatted(application, monitorGroup);
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), url,
                    SberSDKUtils.Method.GET, QueryList.class);
            log.debug("Metrics: " + applications.toString());
            return applications;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public QueryList getTransactionList(String application, String monitorGroup) {
        String url = "/ats/applications/%s/transactions?monitorGroup=%s".formatted(application, monitorGroup);
        try {
            QueryList applications = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), url,
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
            TraceData traces = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), url,
                    SberSDKUtils.Method.GET, TraceData.class);
            log.debug("Traces: " + traces.toString());
            return traces;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public TracingDetails getTracingDetails(String traceId) {
        String url = "ats/spans?traceId=%s".formatted(traceId);

        try {
            TracingDetails trace = sberSDKUtils.callForObject(sberCloudConfig.getApmEndpoint(), url,
                    SberSDKUtils.Method.GET, TracingDetails.class);
            log.debug("Traces: " + trace.toString());
            return trace;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

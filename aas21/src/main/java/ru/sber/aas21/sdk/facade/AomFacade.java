package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.aom.ApplicationDiscoveryRule;
import ru.sber.aas21.sdk.model.aom.Metrics;
import ru.sber.aas21.sdk.model.aom.MonitoringData;
import ru.sber.aas21.sdk.model.aom.ThresholdRuleList;
import ru.sber.aas21.sdk.util.SberSDKUtils;

@Slf4j
@RequiredArgsConstructor
public class AomFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;


    public Metrics getMetrics(String type, String limit, String start) {
        String url = "ams/metrics?type=%s&limit=%s&start=%s".formatted(type, limit, start);
        try {
            Metrics metrics = sberSDKUtils.callForObject(sberCloudConfig.getAomEndpoint(), url,
                    SberSDKUtils.Method.GET, Metrics.class);
            log.debug("Metrics: " + metrics.toString());
            return metrics;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public MonitoringData getMonitoringData(String fillValue) {
        String url = "ams/metricdata?fillValue=%s".formatted(fillValue);
        try {
            MonitoringData monitoringData = sberSDKUtils.callForObject(sberCloudConfig.getAomEndpoint(), url,
                    SberSDKUtils.Method.GET, MonitoringData.class);
            log.debug("Monitoring Data: " + monitoringData.toString());
            return monitoringData;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ThresholdRuleList getThresholdRuleList() {
        String url = "ams/alarms";
        try {
            ThresholdRuleList thresholdRuleList = sberSDKUtils.callForObject(sberCloudConfig.getAomEndpoint(), url,
                    SberSDKUtils.Method.GET, ThresholdRuleList.class);
            log.debug("Monitoring Data: " + thresholdRuleList.toString());
            return thresholdRuleList;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ThresholdRuleList getThresholdRule(String alarmId) {
        String url = "ams/alarms/%s".formatted(alarmId);
        try {
            ThresholdRuleList thresholdRuleList = sberSDKUtils.callForObject(sberCloudConfig.getAomEndpoint(), url,
                    SberSDKUtils.Method.GET, ThresholdRuleList.class);
            log.debug("Monitoring Data: " + thresholdRuleList.toString());
            return thresholdRuleList;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ApplicationDiscoveryRule getApplicationDiscoveryRule(String id) {
        String url = "inv/servicediscoveryrules?id=%s".formatted(id);

        try {
            ApplicationDiscoveryRule applicationDiscoveryRule = sberSDKUtils.callForObject(sberCloudConfig.getAomEndpoint(), url,
                    SberSDKUtils.Method.GET, ApplicationDiscoveryRule.class);
            log.debug("Monitoring Data: " + applicationDiscoveryRule.toString());
            return applicationDiscoveryRule;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

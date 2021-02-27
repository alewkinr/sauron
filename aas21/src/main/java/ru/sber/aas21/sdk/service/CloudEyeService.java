package ru.sber.aas21.sdk.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.cloudEye.metrics.Metrics;
import ru.sber.aas21.sdk.model.cloudEye.metrics.data.MetricData;
import ru.sber.aas21.sdk.util.SberSDKUtils;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Slf4j
@RequiredArgsConstructor
public class CloudEyeService {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;

    public Metrics getAllMetrics() {
        try {
            Metrics metrics = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "metrics", SberSDKUtils.Method.GET, Metrics.class);
            log.debug("Metrics: " + metrics.toString());
            return metrics;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public MetricData getMetricData(String nameSpace, String metricName,
                                    Integer dimensionIndex, String dimensionName, String dimensionValue,
                                    LocalDateTime from, LocalDateTime to, Long period,
                                    String filter) {
        String metricDataFormat = "metric-data?namespace=%s&metric_name=%s&dim.%d=%s,%s&from=%s&to=%s&period=%d&filter=%s";
        String metricDataUrl = metricDataFormat.formatted(nameSpace, metricName, dimensionIndex, dimensionName, dimensionValue,
                from.toEpochSecond(ZoneOffset.UTC) * 1000, to.toEpochSecond(ZoneOffset.UTC) * 1000, period, filter);
        try {
            MetricData metricData = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), metricDataUrl, SberSDKUtils.Method.GET, MetricData.class);
            log.debug("Metrics: " + metricData.toString());
            return metricData;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

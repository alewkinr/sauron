package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.sdk.model.cloudEye.alarms.AlarmId;
import ru.sber.aas21.sdk.model.cloudEye.alarms.Alarms;
import ru.sber.aas21.sdk.model.cloudEye.alarms.EnableAlarmAction;
import ru.sber.aas21.sdk.model.cloudEye.alarms.MetricAlarm;
import ru.sber.aas21.sdk.model.cloudEye.metrics.Metrics;
import ru.sber.aas21.sdk.model.cloudEye.metrics.data.MetricData;
import ru.sber.aas21.sdk.util.SberSDKUtils;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Slf4j
@RequiredArgsConstructor
public class CloudEyeFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;

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

    public Alarms getAlarms() {
        try {
            Alarms alarms = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), "alarms", SberSDKUtils.Method.GET, Alarms.class);
            log.debug("Alarms: " + alarms.toString());
            return alarms;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Alarms getAlarms(String start, Integer limit, String order) {
        String alarmFormat = "alarms?start=%s&limit=%d&order%s";
        String alarmUrl = alarmFormat.formatted(start, limit, order);
        try {
            Alarms alarms = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), alarmUrl, SberSDKUtils.Method.GET, Alarms.class);
            log.debug("Alarms: " + alarms.toString());
            return alarms;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Alarms getAlarm(String alarmId) {
        String alarmFormat = "alarm/%s";
        String alarmUrl = alarmFormat.formatted(alarmId);
        try {
            Alarms alarms = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), alarmUrl, SberSDKUtils.Method.GET, Alarms.class);
            log.debug("Alarms: " + alarms.toString());
            return alarms;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public EnableAlarmAction switchAlarm(String alarmId, Boolean status) {
        String alarmFormat = "alarm/%s/action";
        String alarmUrl = alarmFormat.formatted(alarmId);
        EnableAlarmAction request = new EnableAlarmAction();
        request.alarm_enabled = status;
        try {
            EnableAlarmAction enableAlarmAction = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), alarmUrl, SberSDKUtils.Method.PUT,
                    objectMapper.writeValueAsString(request),
                    EnableAlarmAction.class);
            log.debug("Alarms: " + enableAlarmAction.toString());
            return enableAlarmAction;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public void deleteAlarm(String alarmId) {
        String alarmFormat = "alarm/%s";
        String alarmUrl = alarmFormat.formatted(alarmId);
        sberSDKUtils.call(sberCloudConfig.getCloudEyeEndpoint(), alarmUrl, SberSDKUtils.Method.DELETE);
    }

    public AlarmId createAlarm(MetricAlarm alarm) {
        String alarmUrl = "alarm";
        try {
            AlarmId alarmId = sberSDKUtils.callForObject(sberCloudConfig.getCloudEyeEndpoint(), alarmUrl, SberSDKUtils.Method.POST,
                    objectMapper.writeValueAsString(alarm),
                    AlarmId.class);
            log.debug("Alarms: " + alarmId.toString());
            return alarmId;
        } catch (JsonProcessingException e) {
            throw new CustomException("Sber API response deserialization error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

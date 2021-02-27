package ru.sber.aas21.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.sber.aas21.sdk.facade.AomFacade;
import ru.sber.aas21.sdk.facade.ApmFacade;
import ru.sber.aas21.sdk.facade.CloudEyeFacade;
import ru.sber.aas21.sdk.facade.CloudTraceFacade;
import ru.sber.aas21.sdk.model.aom.ThresholdRuleList;
import ru.sber.aas21.sdk.model.apm.QueryList;
import ru.sber.aas21.sdk.model.cloudEye.alarms.Alarms;
import ru.sber.aas21.sdk.model.cloudEye.metrics.Metrics;
import ru.sber.aas21.sdk.model.cloudEye.metrics.data.MetricData;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;

@Slf4j
@RequiredArgsConstructor
@Service
public class TestService {

    private final CloudEyeFacade cloudEyeFacade;
    private final CloudTraceFacade cloudTraceFacade;
    private final AomFacade aomFacade;
    private final ApmFacade apmFacade;

    @PostConstruct
    public void init() {
//        try {
//            cloudEyeMetrics();
//        } catch (Throwable t) {
//            log.error(t.getMessage());
//        }
//        try {
//            apmTest();
//        } catch (Throwable t) {
//            log.error(t.getMessage());
//        }
//        try {
//            aomTest();
//        } catch (Throwable t) {
//            log.error(t.getMessage());
//        }
    }

    private void cloudEyeMetrics() {
        MetricData metricData = cloudEyeFacade.getMetricData("SYS.ECS", "disk_write_requests_rate", 0,
                "instance_id", "cc49bc2b-20ff-4a7d-bfe3-56fc061b30b0",
                LocalDateTime.now().minusDays(1), LocalDateTime.now(), 1200L, "min");
        System.out.println();
        Metrics allMetrics = cloudEyeFacade.getAllMetrics();
        Alarms alarms = cloudEyeFacade.getAlarms();
        System.out.println();
    }

    private void apmTest() {
        QueryList applications = apmFacade.getMonitorGroups();
        apmFacade.getServices("0b9654864a0024ab2f81c01da83988dc");
        System.out.println();
    }

    private void aomTest() {
        ThresholdRuleList thresholdRuleList = aomFacade.getThresholdRuleList();
        System.out.println();
    }
}

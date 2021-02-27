package ru.sber.aas21.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.sber.aas21.sdk.model.apm.QueryList;
import ru.sber.aas21.sdk.model.cloudEye.alarms.Alarms;
import ru.sber.aas21.sdk.model.cloudEye.metrics.Metrics;
import ru.sber.aas21.sdk.model.cloudEye.metrics.data.MetricData;
import ru.sber.aas21.sdk.facade.ApplicationOperationManagementFacade;
import ru.sber.aas21.sdk.facade.ApplicationPerformanceManagementFacade;
import ru.sber.aas21.sdk.facade.CloudEyeFacade;
import ru.sber.aas21.sdk.facade.CloudTraceFacade;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class TestService {

    private final CloudEyeFacade cloudEyeFacade;
    private final CloudTraceFacade cloudTraceFacade;
    private final ApplicationOperationManagementFacade aomFacade;
    private final ApplicationPerformanceManagementFacade apmFacade;

    @PostConstruct
    public void init() {
        cloudEyeMetrics();
        apmTest();
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

    private void apmTest(){
        QueryList applications = apmFacade.getApplications();
        QueryList services = apmFacade.getServices();
        System.out.println();
    }
}

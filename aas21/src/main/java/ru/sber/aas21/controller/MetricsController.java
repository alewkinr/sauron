package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.sber.aas21.sdk.model.cloudEye.metrics.Metrics;
import ru.sber.aas21.sdk.model.cloudEye.metrics.data.MetricData;
import ru.sber.aas21.sdk.facade.CloudEyeFacade;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/metrics")
public class MetricsController {

    private final CloudEyeFacade cloudEyeFacade;
    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");

    @GetMapping
    public ResponseEntity<Metrics> getAllMetrics() {
        return ResponseEntity.ok(cloudEyeFacade.getAllMetrics());
    }

    @GetMapping("/data")
    public ResponseEntity<MetricData> getMetricDate(@RequestParam("nameSpace") String nameSpace,
                                                    @RequestParam("metricName") String metricName,
                                                    @RequestParam("dimensionIndex") String dimensionIndex,
                                                    @RequestParam("dimensionName") String dimensionName,
                                                    @RequestParam("dimensionValue") String dimensionValue,
                                                    @RequestParam("from") String from,
                                                    @RequestParam("to") String to,
                                                    @RequestParam("period") String period,
                                                    @RequestParam(value = "filter", required = false) String filter) {
        return ResponseEntity.ok(cloudEyeFacade.getMetricData(nameSpace, metricName, Integer.valueOf(dimensionIndex), dimensionName, dimensionValue,
                LocalDateTime.parse(from, DATE_TIME_FORMATTER), LocalDateTime.parse(to, DATE_TIME_FORMATTER), Long.valueOf(period), filter));
    }

    /**
     * Requests CPU usage
     * Example: namespace=AGT.ECS&from=1614414200038&to=1614417800038&metric_name=cpu_usage&filter=average&period=1&dim.0=instance_id%2Ccc49bc2b-20ff-4a7d-bfe3-56fc061b30b0
     *
     * @param from   - from date
     * @param to     - to date
     * @param period - period
     * @return metrics data
     */
    @GetMapping("/data/cpu-usage")
    public ResponseEntity<MetricData> getCpuUsage(@RequestParam("dimensionValue") String dimensionValue,
                                                  @RequestParam("from") String from,
                                                  @RequestParam("to") String to,
                                                  @RequestParam("period") String period) {
        return ResponseEntity.ok(cloudEyeFacade.getMetricData("AGT.ECS", "cpu_usage", 0,
                "instance_id", dimensionValue,
                LocalDateTime.parse(from, DATE_TIME_FORMATTER), LocalDateTime.parse(to, DATE_TIME_FORMATTER), Long.valueOf(period), ""));
    }

    /**
     * Requests CPU usage
     * Example: metric-data?namespace=AGT.ECS&from=1614414200038&to=1614417800038&metric_name=mem_usedPercent&filter=average&period=1&dim.0=instance_id%2Ccc49bc2b-20ff-4a7d-bfe3-56fc061b30b0
     *
     * @param from   - from date
     * @param to     - to date
     * @param period - period
     * @return metrics data
     */
    @GetMapping("/data/mem-used-percent")
    public ResponseEntity<MetricData> getMemUsedPercent(@RequestParam("dimensionValue") String dimensionValue,
                                                        @RequestParam("from") String from,
                                                        @RequestParam("to") String to,
                                                        @RequestParam("period") String period) {
        return ResponseEntity.ok(cloudEyeFacade.getMetricData("AGT.ECS", "mem_usedPercent", 0,
                "instance_id", dimensionValue,
                LocalDateTime.parse(from, DATE_TIME_FORMATTER), LocalDateTime.parse(to, DATE_TIME_FORMATTER), Long.valueOf(period), "average"));
    }
}

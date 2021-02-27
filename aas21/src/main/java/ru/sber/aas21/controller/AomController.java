package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.sdk.facade.AomFacade;
import ru.sber.aas21.sdk.model.aom.ApplicationDiscoveryRule;
import ru.sber.aas21.sdk.model.aom.Metrics;
import ru.sber.aas21.sdk.model.aom.MonitoringData;
import ru.sber.aas21.sdk.model.aom.ThresholdRuleList;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/aom")
public class AomController {

    private final AomFacade aomFacade;

    @GetMapping("/metrics")
    public ResponseEntity<Metrics> getMetrics(@RequestParam("type") String type,
                                              @RequestParam("limit") String limit,
                                              @RequestParam("start") String start) {
        return ResponseEntity.ok(aomFacade.getMetrics(type, limit, start));
    }

    @GetMapping("/metricdata")
    public ResponseEntity<MonitoringData> getMonitoringData(@RequestParam("fillData") String fillData) {
        return ResponseEntity.ok(aomFacade.getMonitoringData(fillData));
    }

    @GetMapping("/thresholds")
    public ResponseEntity<ThresholdRuleList> getThresholds() {
        return ResponseEntity.ok(aomFacade.getThresholdRuleList());
    }

    @GetMapping("/thresholds/{alarmId}")
    public ResponseEntity<ThresholdRuleList> getThreshold(@PathVariable String alarmId) {
        return ResponseEntity.ok(aomFacade.getThresholdRule(alarmId));
    }

    @GetMapping("/servicediscoveryrules/{id}")
    public ResponseEntity<ApplicationDiscoveryRule> getApplicationDiscoveryRule(@PathVariable String id) {
        return ResponseEntity.ok(aomFacade.getApplicationDiscoveryRule(id));
    }
}

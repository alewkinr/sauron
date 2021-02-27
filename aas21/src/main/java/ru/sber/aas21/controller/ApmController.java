package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.sdk.facade.ApmFacade;
import ru.sber.aas21.sdk.model.apm.QueryList;
import ru.sber.aas21.sdk.model.apm.TraceData;
import ru.sber.aas21.sdk.model.apm.TracingDetails;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/apm")
public class ApmController {

    private final ApmFacade apmFacade;

    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");

    @GetMapping("/monitorGroups")
    public ResponseEntity<QueryList> getApplications() {
        return ResponseEntity.ok(apmFacade.getMonitorGroups());
    }

    @GetMapping("/applications")
    public ResponseEntity<QueryList> getServices(@RequestParam("monitorGroup") String monitorGroup) {
        return ResponseEntity.ok(apmFacade.getServices(monitorGroup));
    }

    @GetMapping("/applications/{application}/instances")
    public ResponseEntity<QueryList> getServiceInstances(@PathVariable String application,
                                                         @RequestParam("monitorGroup") String monitorGroup) {
        return ResponseEntity.ok(apmFacade.getServiceInstanceList(application, monitorGroup));
    }

    @GetMapping("/applications/{application}/transactions")
    public ResponseEntity<QueryList> getServiceTransactions(@PathVariable String application,
                                                            @RequestParam("monitorGroup") String monitorGroup) {
        return ResponseEntity.ok(apmFacade.getTransactionList(application, monitorGroup));
    }

    @GetMapping("/applications/{application}/traces")
    public ResponseEntity<TraceData> getServiceTransactions(@PathVariable String application,
                                                            @RequestParam("from") String startTime,
                                                            @RequestParam("to") String endTime,
                                                            @RequestParam("monitorGroup") String monitorGroup,
                                                            @RequestParam("limit") String limit) {
        return ResponseEntity.ok(apmFacade.getTrace(LocalDateTime.parse(startTime, DATE_TIME_FORMATTER),
                LocalDateTime.parse(endTime, DATE_TIME_FORMATTER), application, monitorGroup, Integer.valueOf(limit)));
    }

    @GetMapping("/applications/spans")
    public ResponseEntity<TracingDetails> getTraceDetails(@RequestParam("traceId") String traceId) {
        return ResponseEntity.ok(apmFacade.getTracingDetails(traceId));
    }
}

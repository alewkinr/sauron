package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.sdk.facade.CloudTraceFacade;
import ru.sber.aas21.sdk.model.cloudTrace.TraceResponse;
import ru.sber.aas21.sdk.model.cloudTrace.TrackerResponse;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/trackers")
public class TraceController {

    private final CloudTraceFacade cloudTraceFacade;

    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");

    @GetMapping("/{trackerName}")
    public ResponseEntity<TrackerResponse> getTrackers(@PathVariable String trackerName) {
        return ResponseEntity.ok(cloudTraceFacade.getTracker(trackerName));
    }

    @GetMapping("/{trackerName}/traces")
    public ResponseEntity<TraceResponse> getTraces(@PathVariable String trackerName,
                                                   @RequestParam("limit") String limit,
                                                   @RequestParam("from") String from,
                                                   @RequestParam("to") String to,
                                                   @RequestParam("traceName") String traceName,
                                                   @RequestParam("resourceType") String resourceType,
                                                   @RequestParam("serviceType") String serviceType) {
        return ResponseEntity.ok(cloudTraceFacade.getTrace(trackerName, Integer.valueOf(limit),
                LocalDateTime.parse(from, DATE_TIME_FORMATTER), LocalDateTime.parse(to, DATE_TIME_FORMATTER),
                traceName, resourceType, serviceType));
    }

}

package ru.sber.aas21.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.sber.aas21.sdk.model.cloudEye.alarms.AlarmId;
import ru.sber.aas21.sdk.model.cloudEye.alarms.Alarms;
import ru.sber.aas21.sdk.model.cloudEye.alarms.EnableAlarmAction;
import ru.sber.aas21.sdk.model.cloudEye.alarms.MetricAlarm;
import ru.sber.aas21.sdk.service.CloudEyeFacade;

import javax.annotation.PostConstruct;

@PreAuthorize("isAuthenticated()")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/alarms")
public class AlarmsController {

    private final CloudEyeFacade cloudEyeFacade;

    @PostConstruct
    public void init() {
        Alarms alarms = cloudEyeFacade.getAlarms();
        System.out.println(alarms);
    }

    /**
     * Alarms
     * <p>
     * Example: alarms?start=al1441967036681YkazZ0deN&limit=10&order=desc
     *
     * @param start start
     * @param limit limit count
     * @param order asc or desc
     * @return alarms
     */
    @GetMapping
    public ResponseEntity<Alarms> getAlarms(@RequestParam(value = "start", required = false) String start,
                                            @RequestParam(value = "limit", required = false) String limit,
                                            @RequestParam(value = "order", required = false) String order) {
        return ResponseEntity.ok(cloudEyeFacade.getAlarms(start, Integer.valueOf(limit), order));
    }

    @GetMapping("/{alarmId}")
    public ResponseEntity<Alarms> getAlarm(@PathVariable("alarmId") String alarmId) {
        return ResponseEntity.ok(cloudEyeFacade.getAlarm(alarmId));
    }

    @PutMapping("/{alarm_id}/action")
    public ResponseEntity<EnableAlarmAction> switchAlarm(@PathVariable("alarm_id") String alarmId, Boolean status) {
        return ResponseEntity.ok(cloudEyeFacade.switchAlarm(alarmId, status));
    }

    @PostMapping()
    public ResponseEntity<AlarmId> createAlarm(@RequestBody MetricAlarm alarm) {
        return ResponseEntity.ok(cloudEyeFacade.createAlarm(alarm));
    }
}

package ru.sber.aas21.sdk.model.cloudEye.alarms;

import java.util.List;

public class MetricAlarm {
    public String alarm_name;
    public String alarm_description;
    public Metric metric;
    public Condition condition;
    public boolean alarm_enabled;
    public int alarm_level;
    public boolean alarm_action_enabled;
    public String alarm_id;
    public Object update_time;
    public String alarm_state;
    public List<AlarmAction> alarm_actions;
    public List<OkAction> ok_actions;
}

package ru.sber.aas21.sdk.model.aom;

import java.util.List;

public class MonitoringData {
    public List<Metric> metrics;
    public int period;
    public String timerange;
    public List<String> statistics;
}

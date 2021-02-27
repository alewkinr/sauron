package ru.sber.aas21.sdk.model.cloudEye.alarms;

import java.util.List;

public class Metric {
    public String namespace;
    public List<Dimension> dimensions;
    public String metric_name;
}

package ru.sber.aas21.sdk.model.aom;

import java.util.List;

public class Threshold {
    public String id;
    public String alarmName;
    public String alarmDescription;
    public boolean actionEnabled;
    public List<Object> okActions;
    public List<Object> alarmActions;
    public List<Object> insufficientDataActions;
    public String stateValue;
    public String stateReason;
    public Object stateUpdatedTimestamp;
    public String metricName;
    public String namespace;
    public String statistic;
    public List<Dimension> dimensions;
    public int period;
    public int evaluationPeriods;
    public String unit;
    public String threshold;
    public String comparisonOperator;
    public String alarmAdvice;
    public int alarmLevel;
}

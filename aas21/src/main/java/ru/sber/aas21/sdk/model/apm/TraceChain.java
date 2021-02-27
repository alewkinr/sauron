package ru.sber.aas21.sdk.model.apm;

public class TraceChain {
    public String traceId;
    public String type;
    public int status;
    public int duration;
    public String application;
    public String instance;
    public String transaction;
    public long startTime;
    public long endTime;
    public String address;
}

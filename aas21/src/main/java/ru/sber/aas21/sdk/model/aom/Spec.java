package ru.sber.aas21.sdk.model.aom;

import java.util.List;

public class Spec {
    public String appType;
    public List<String> attrList;
    public List<DiscoveryRule> discoveryRule;
    public NameRule nameRule;
    public String detectLog;
    public List<String> logFileFix;
    public int priority;
    public String isDetect;
    public String isDefaultRule;
    public List<LogPathRule> logPathRule;
}

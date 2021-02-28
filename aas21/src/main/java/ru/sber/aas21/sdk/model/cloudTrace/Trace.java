package ru.sber.aas21.sdk.model.cloudTrace;

public class Trace {
    public long time;
    public User user;
    public Response response;
    public int code;
    public String service_type;
    public String resource_type;
    public String resource_name;
    public String resource_id;
    public String trace_name;
    public String trace_status;
    public String trace_type;
    public String api_version;
    public long record_time;
    public String trace_id;
    public String request_id;
    public String location_info;
    public String endpoint;
    public String resource_url;
}

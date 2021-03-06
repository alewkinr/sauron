package ru.sber.aas21.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(prefix = "sber.cloud")
public class SberCloudConfig {
    private String key;
    private String secret;
    private String username;
    private String projectId;
    private String apiVersion;
    private String cloudEyeEndpoint;
    private String cloudTraceEndpoint;
    private String aomEndpoint;
    private String apmEndpoint;
}

package ru.sber.aas21.configuration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@ConfigurationProperties(prefix = "sber.cloud")
public class SberCloudConfig {
    private String key;
    private String secret;
    private String username;
    private String projectId;
    private String endpoint;
}

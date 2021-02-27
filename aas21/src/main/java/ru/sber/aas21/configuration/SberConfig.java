package ru.sber.aas21.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.sber.aas21.sdk.service.CloudEyeService;
import ru.sber.aas21.sdk.util.SberSDKUtils;

@Configuration
public class SberConfig {

    @Bean
    public SberSDKUtils sberSDKUtils(SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new SberSDKUtils(sberCloudConfig, objectMapper);
    }

    @Bean
    public CloudEyeService cloudEyeService(SberSDKUtils sberSDKUtils, SberCloudConfig sberCloudConfig){
        return new CloudEyeService(sberSDKUtils, sberCloudConfig);
    }
}

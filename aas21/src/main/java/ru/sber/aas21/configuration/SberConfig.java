package ru.sber.aas21.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.sber.aas21.sdk.service.CloudEyeFacade;
import ru.sber.aas21.sdk.util.SberSDKUtils;

@Configuration
public class SberConfig {

    @Bean
    public SberSDKUtils sberSDKUtils(SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new SberSDKUtils(sberCloudConfig, objectMapper);
    }

    @Bean
    public CloudEyeFacade cloudEyeService(SberSDKUtils sberSDKUtils, SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new CloudEyeFacade(sberSDKUtils, sberCloudConfig, objectMapper);
    }
}

package ru.sber.aas21.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.sber.aas21.sdk.facade.ApplicationOperationManagementFacade;
import ru.sber.aas21.sdk.facade.ApplicationPerformanceManagementFacade;
import ru.sber.aas21.sdk.facade.CloudEyeFacade;
import ru.sber.aas21.sdk.facade.CloudTraceFacade;
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

    @Bean
    public CloudTraceFacade cloudTraceService(SberSDKUtils sberSDKUtils, SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new CloudTraceFacade(sberSDKUtils, sberCloudConfig, objectMapper);
    }

    @Bean
    public ApplicationPerformanceManagementFacade applicationPerformanceManagementFacadeService(SberSDKUtils sberSDKUtils, SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new ApplicationPerformanceManagementFacade(sberSDKUtils, sberCloudConfig, objectMapper);
    }

    @Bean
    public ApplicationOperationManagementFacade applicationOperationManagementFacadeService(SberSDKUtils sberSDKUtils, SberCloudConfig sberCloudConfig, ObjectMapper objectMapper) {
        return new ApplicationOperationManagementFacade(sberSDKUtils, sberCloudConfig, objectMapper);
    }
}

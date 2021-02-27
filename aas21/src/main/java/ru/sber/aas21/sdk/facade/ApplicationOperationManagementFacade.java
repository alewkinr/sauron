package ru.sber.aas21.sdk.facade;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import ru.sber.aas21.configuration.SberCloudConfig;
import ru.sber.aas21.sdk.util.SberSDKUtils;

@Slf4j
@RequiredArgsConstructor
public class ApplicationOperationManagementFacade {

    private final SberSDKUtils sberSDKUtils;
    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;

}

package ru.sber.aas21.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper(ObjectMapper objectMapper, List<Converter> converterList) {
        ModelMapper modelMapper = new ModelMapper();
        converterList.forEach(modelMapper::addConverter);
        objectMapper.registerModule(new JavaTimeModule());
        return modelMapper;
    }

}

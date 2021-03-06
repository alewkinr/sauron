package ru.sber.aas21;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@ConfigurationPropertiesScan("ru.sber.aas21")
@SpringBootApplication
public class Aas21Application {

    public static void main(String[] args) {
        SpringApplication.run(Aas21Application.class, args);
    }

}

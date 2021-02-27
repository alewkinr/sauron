FROM openjdk:15-jdk-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE=apps/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/git app.jar"]
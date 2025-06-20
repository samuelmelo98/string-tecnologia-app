FROM eclipse-temurin:21-jdk as build

WORKDIR /app
COPY . .

RUN ./mvnw package -DskipTests

FROM eclipse-temurin:21-jdk
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app.jar"]

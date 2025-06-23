package com.example.backend;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    @PreAuthorize("hasRole('admin')")
    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "✅ Backend: Token JWT validado com sucesso!");
    }

    @PreAuthorize("hasRole('admin')")
    @GetMapping("/users")
    public List<Map<String, Object>> getUsers() {
        return List.of(
                Map.of(
                        "id", 1,
                        "name", "Samuel Melo",
                        "email", "samuel@example.com"
                ),
                Map.of(
                        "id", 2,
                        "name", "Maria Silva",
                        "email", "maria@example.com"
                ),
                Map.of(
                        "id", 3,
                        "name", "João Souza",
                        "email", "joao@example.com"
                )
        );
    }
}


package com.example.demo.repository;

import com.example.demo.model.LogEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface LogEventRepository extends JpaRepository<LogEvent, Long> {
    Optional<LogEvent> findByEmail(String email);
}

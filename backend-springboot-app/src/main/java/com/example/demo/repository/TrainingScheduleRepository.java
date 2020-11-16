package com.example.demo.repository;

import com.example.demo.model.TrainingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrainingScheduleRepository extends JpaRepository<TrainingSchedule,String> {
    Optional<TrainingSchedule> findByName(String name);
}

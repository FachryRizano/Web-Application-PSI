package com.example.demo.repository;

import com.example.demo.model.TrainingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingScheduleRepository extends JpaRepository<TrainingSchedule,String> {
}

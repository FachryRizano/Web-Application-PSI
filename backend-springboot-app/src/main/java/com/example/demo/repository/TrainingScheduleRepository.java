package com.example.demo.repository;

import com.example.demo.model.trainingSchedules.TrainingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TrainingScheduleRepository extends JpaRepository<TrainingSchedule,Long> {
    Optional<TrainingSchedule> findBySubjectName(String subjectName);
}

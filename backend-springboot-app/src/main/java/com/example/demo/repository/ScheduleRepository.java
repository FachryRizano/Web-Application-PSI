package com.example.demo.repository;

import com.example.demo.model.trainingSchedules.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule,Long> {
}

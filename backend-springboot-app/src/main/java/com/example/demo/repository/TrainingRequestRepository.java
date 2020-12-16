package com.example.demo.repository;

import com.example.demo.model.trainingRequest.TrainingRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRequestRepository extends JpaRepository<TrainingRequest,Long> {
}

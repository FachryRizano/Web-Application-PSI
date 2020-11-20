package com.example.demo.repository;

import com.example.demo.model.trainingSchedules.EParticipant;
import com.example.demo.model.trainingSchedules.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<Participant,Long> {
    Optional<Participant> findByName(EParticipant name);
}

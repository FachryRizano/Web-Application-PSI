package com.example.demo.model.trainingSchedules;

import com.example.demo.model.trainingSchedules.EParticipant;

import javax.persistence.*;

@Entity
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private EParticipant name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EParticipant getName() {
        return name;
    }

    public void setName(EParticipant name) {
        this.name = name;
    }
}

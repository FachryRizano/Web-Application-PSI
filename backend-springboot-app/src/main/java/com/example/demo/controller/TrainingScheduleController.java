package com.example.demo.controller;

import com.example.demo.model.TrainingSchedule;
import com.example.demo.repository.TrainingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrainingScheduleController {
    @Autowired
    private TrainingScheduleRepository trainingScheduleRepository;
    
    public List<TrainingSchedule> getAllEmployee(){
        return
    }
}

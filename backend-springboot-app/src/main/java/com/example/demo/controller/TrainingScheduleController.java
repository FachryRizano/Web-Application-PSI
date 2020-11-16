package com.example.demo.controller;

import com.example.demo.model.TrainingSchedule;
import com.example.demo.repository.TrainingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("api/test/v1/")
@RestController
public class TrainingScheduleController {
    @Autowired
    private TrainingScheduleRepository trainingScheduleRepository;

    //get all training schedule
    @GetMapping("training-schedules")
    public List<TrainingSchedule> getAllEmployee(){
        return trainingScheduleRepository.findAll();
    }

    //create a training schedule
    @PostMapping("training-schedules")
    public TrainingSchedule createTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
        return trainingScheduleRepository.save(trainingSchedule);
    }

    


}

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

    //update a training schedulu
    @PutMapping("training-schedules/{name}")
    public ResponseEntity<TrainingSchedule> updateTrainingSchedule(@PathVariable String name, @RequestBody TrainingSchedule trainingScheduleDetails){
        TrainingSchedule trainingSchedule = trainingScheduleRepository.findByName(name)
                .orElseThrow(()-> new RuntimeException("can't find the training schedule"));
        trainingSchedule.setSubjectsName(trainingScheduleDetails.getSubjectsName());
        trainingSchedule.setDuration(trainingScheduleDetails.getDuration());
        trainingSchedule.setPrice(trainingScheduleDetails.getPrice());
        trainingSchedule.setSchedules(trainingScheduleDetails.getSchedules());
        trainingScheduleRepository.save(trainingSchedule);
        return ResponseEntity.ok(trainingSchedule);
    }


}

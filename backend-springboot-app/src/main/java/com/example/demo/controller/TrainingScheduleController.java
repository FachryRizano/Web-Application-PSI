package com.example.demo.controller;

import com.example.demo.model.TrainingSchedule;
import com.example.demo.repository.TrainingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("api/test/v1/")
@RestController
public class TrainingScheduleController {
    @Autowired
    private TrainingScheduleRepository trainingScheduleRepository;

    //get all training schedule
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("training-schedules")
    public List<TrainingSchedule> getAllEmployee(){
        return trainingScheduleRepository.findAll();
    }

    //create a training schedule
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @PostMapping("training-schedules")
    public TrainingSchedule createTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
        return trainingScheduleRepository.save(trainingSchedule);
    }

    //update a training schedule
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @PutMapping("training-schedules/{subjectName}")
    public ResponseEntity<TrainingSchedule> updateTrainingSchedule(@PathVariable String subjectName, @RequestBody TrainingSchedule trainingScheduleDetails){

        TrainingSchedule trainingSchedule = trainingScheduleRepository.findBySubjectName(subjectName)
                .orElseThrow(()-> new RuntimeException("can't find the training schedule"));
        trainingSchedule.setSubjectName(trainingScheduleDetails.getSubjectName());
        trainingSchedule.setDuration(trainingScheduleDetails.getDuration());
        trainingSchedule.setPrice(trainingScheduleDetails.getPrice());
        trainingSchedule.setSchedules(trainingScheduleDetails.getSchedules());
        trainingScheduleRepository.save(trainingSchedule);
        return ResponseEntity.ok(trainingSchedule);

    }


}

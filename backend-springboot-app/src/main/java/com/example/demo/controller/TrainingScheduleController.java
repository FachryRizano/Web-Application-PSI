package com.example.demo.controller;

import com.example.demo.model.trainingSchedules.TrainingSchedule;
import com.example.demo.payloads.response.MessageResponse;
import com.example.demo.repository.ParticipantRepository;
import com.example.demo.repository.ScheduleRepository;
import com.example.demo.repository.TrainingScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RequestMapping("api/test/")
@RestController
public class TrainingScheduleController {
    @Autowired
    private TrainingScheduleRepository trainingScheduleRepository;

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    //get all training schedule
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("training-schedules")
    public ResponseEntity<?> getAllTrainingSchedule(){
        return ResponseEntity.ok(trainingScheduleRepository.findAll());
    }

    //User hanya bisa view Training Schedules tidak bisa membuat, menghapus dan mengupdate Training schedule, user
    //hanya bisa request training schedule

//    //create a training schedule
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    @PostMapping("training-schedules")
//    public TrainingSchedule createTrainingSchedule(@RequestBody TrainingSchedule trainingSchedule){
//        return trainingScheduleRepository.save(trainingSchedule);
//    }
//
//    //update a training schedule
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    @PutMapping("training-schedules/{subjectName}")
//    public ResponseEntity<?> updateTrainingSchedule(@PathVariable String subjectName, @RequestBody TrainingSchedule trainingScheduleDetails){
//
//        TrainingSchedule trainingSchedule = trainingScheduleRepository.findBySubjectName(subjectName)
//                .orElseThrow(()-> new RuntimeException("can't find the training schedule"));
//        trainingSchedule.setSubjectName(trainingScheduleDetails.getSubjectName());
//        trainingSchedule.setDuration(trainingScheduleDetails.getDuration());
//        trainingSchedule.setSchedules(trainingScheduleDetails.getSchedules());
//        trainingScheduleRepository.save(trainingSchedule);
//        return ResponseEntity.ok(new MessageResponse(trainingSchedule + "has been update"));
//
//    }
//    //delete a training schedule
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    @DeleteMapping("training-schedules/{subjectName}")
//    public ResponseEntity<?> deleteTrainingSchedule(@PathVariable String subjectName){
//        TrainingSchedule trainingSchedule = trainingScheduleRepository.findBySubjectName(subjectName)
//                .orElseThrow(()->new RuntimeException("Can't find the Training Schedule"));
//        trainingScheduleRepository.delete(trainingSchedule);
//        return ResponseEntity.ok(new MessageResponse("Training Schedules has been deleted"));
//    }

}

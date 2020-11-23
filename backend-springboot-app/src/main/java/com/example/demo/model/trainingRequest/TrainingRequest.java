package com.example.demo.model.trainingRequest;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.Year;

@Entity
public class TrainingRequest {
    @Id
    private Long id;
    private Year periode;
    private String subject;
    

}

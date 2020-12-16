package com.example.demo.model.trainingSchedules;

import javax.persistence.PostLoad;

public class TrainingScheduleListener {
    @PostLoad
    public void updateKelompok(TrainingSchedule ts){
        ts.setKelompok(ts.getCode().substring(0,2));
    }
}

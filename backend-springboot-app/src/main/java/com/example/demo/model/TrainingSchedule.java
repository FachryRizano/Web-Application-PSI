package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class TrainingSchedule {
    @Id
    private String code;
    private String subjectName;
//    private Role participant;
    private int duration;
    private int price;

    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(name="training_schedule_with_schedule_details",
                joinColumns = @JoinColumn(name="training_schedule_id"),
                inverseJoinColumns = @JoinColumn(name="schedule_id"))
    private List<Schedule> schedules;

    public TrainingSchedule(){

    }

    public TrainingSchedule(String code, String subjectName, List<Schedule> schedules, int duration, int price) {
        this.code = code;
        this.subjectName = subjectName;
        this.schedules = schedules;
        this.duration = duration;
        this.price = price;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSubjectsName() {
        return subjectName;
    }

    public void setSubjectsName(String subjectName) {
        this.subjectName = subjectName;
    }

    public List<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}

package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TrainingSchedule {
    @Id
    private String code;
    private String subjectsName;
    private List<Schedule> schedules;
//    private Role participant;
    private int duration;
    private int price;

    public TrainingSchedule(){

    }

    public TrainingSchedule(String code, String subjectsName, List<Schedule> schedules, int duration, int price) {
        this.code = code;
        this.subjectsName = subjectsName;
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
        return subjectsName;
    }

    public void setSubjectsName(String subjectsName) {
        this.subjectsName = subjectsName;
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

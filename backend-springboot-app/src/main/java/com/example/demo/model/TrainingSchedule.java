package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class TrainingSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String subjectName;
    private String participant;
    private String duration;
    private int price;

    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(name="ts_w_sd",
                joinColumns = @JoinColumn(name="training_schedule_id"),
                inverseJoinColumns = @JoinColumn(name="schedule_id"))
    private List<Schedule> schedules;

    public TrainingSchedule(){

    }

    public TrainingSchedule(String code, String subjectName, EParticipant participant, String duration, int price) {
        this.code = code;
        this.subjectName = subjectName;
        this.participant = participant;
        this.duration = duration;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public EParticipant getParticipant() {
        return participant;
    }

    public void setParticipantName(EParticipant participant) {
        this.participant = participant;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public List<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }
}

package com.example.demo.model.trainingSchedules;

import com.example.demo.model.trainingSchedules.Participant;
import com.example.demo.model.trainingSchedules.Schedule;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class TrainingSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String subjectName;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name="ts_w_P",
                joinColumns = @JoinColumn(name="training_schedule_id"),
                inverseJoinColumns = @JoinColumn(name="participant_id"))
    private Set<Participant> participants = new HashSet<>();

    private String duration;


    @OneToMany(fetch=FetchType.LAZY)
    @JoinTable(name="ts_w_sd",
                joinColumns = @JoinColumn(name="training_schedule_id"),
                inverseJoinColumns = @JoinColumn(name="schedule_id"))
    private Set<Schedule> schedules = new HashSet<>();

    public TrainingSchedule(){

    }

    public TrainingSchedule(String code, String subjectName, String duration) {
        this.code = code;
        this.subjectName = subjectName;
        this.duration = duration;
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

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Set<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(Set<Schedule> schedules) {
        this.schedules = schedules;
    }

    public Set<Participant> getParticipant() {
        return this.participants;
    }

    public void setParticipants(Set<Participant> participants) {
        this.participants = participants;
    }
}

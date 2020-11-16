package com.example.demo.model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Schedule {
    private Date date;
    private String location;
    private String speakerName;
    private String linkPDF;

    public Schedule(){
        
    }

    public Schedule(Date date, String location, String speakerName, String linkPDF) {
        this.date = date;
        this.location = location;
        this.speakerName = speakerName;
        this.linkPDF = linkPDF;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpeakerName() {
        return speakerName;
    }

    public void setSpeakerName(String speakerName) {
        this.speakerName = speakerName;
    }

    public String getLinkPDF() {
        return linkPDF;
    }

    public void setLinkPDF(String linkPDF) {
        this.linkPDF = linkPDF;
    }
}

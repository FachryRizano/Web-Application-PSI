
package com.example.demo.model.trainingRequest;
import com.example.demo.model.user.userdetails.UserDetails;;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class TrainingRequest{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;
    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(name="tr_w_ud",
            joinColumns = @JoinColumn(name="training_request_id"),
            inverseJoinColumns = @JoinColumn(name="user_details_id"))
    private Set<UserDetails> userDetails = new HashSet<>();
    private String subjectName;
    private String code;
    private String kelompok;
    private String duration;
    private int price;
    private Date date;
    private String location;
    private String speakerName;
    private String vendor;

    public TrainingRequest( String subjectName, String code, String kelompok, String duration, int price, Date date, String location, String speakerName, String vendor) {
        this.subjectName = subjectName;
        this.code = code;
        this.kelompok = kelompok;
        this.duration = duration;
        this.price = price;
        this.date = date;
        this.location = location;
        this.speakerName = speakerName;
        this.vendor = vendor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<UserDetails> getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(Set<UserDetails> userDetails) {
        this.userDetails = userDetails;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getKelompok() {
        return kelompok;
    }

    public void setKelompok(String kelompok) {
        this.kelompok = kelompok;
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

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }
}
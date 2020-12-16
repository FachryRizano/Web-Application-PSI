import com.example.demo.model.user.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class TrainingRequest{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;
    private UserDetails userDetails;
    private String subjectName;
    private String code;
    private String kelompok;
    private String duration;
    private int price;
    private Date date;
    private String location;
    private String speakerName;
    private String vendor;

    public TrainingRequest(UserDetails userDetails, String subjectName, String code, String kelompok, String duration, int price, Date date, String location, String speakerName, String vendor) {
        this.userDetails = userDetails;
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

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
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
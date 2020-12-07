//package com.example.demo.model.trainingRequest;
//
//import com.example.demo.model.user.userdetails.UserDetails;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import java.time.Year;
//import java.util.Date;
//
//@Entity
//public class TrainingRequest {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
////    noHP dan ukuranKaos di ovveride
//    //untuk user details ambil primary key atau bikin baru ?
//    private UserDetails userDetails;
//
//    // INI DARI TRAINING SCHEDULE
//    private String subjectName;
//    private String code;
//    //ambil 2 huruf terdepan dari code
//    private String group;
//    private String duration;
//
//    //INI DARI SCHEDULE DETAILS
//    private int price;
//    private Date date;
//    private String location;
//    private String speakerName;
//
//}
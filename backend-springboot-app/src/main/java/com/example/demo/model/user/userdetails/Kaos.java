package com.example.demo.model.user.userdetails;

import javax.persistence.*;
@Entity
public class Kaos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Enumerated(EnumType.STRING)
    private EKaos ukuran;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public EKaos getUkuran() {
        return ukuran;
    }

    public void setUkuran(EKaos ukuran) {
        this.ukuran = ukuran;
    }
}

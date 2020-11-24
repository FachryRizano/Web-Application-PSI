package com.example.demo.model.user.userdetails;

import com.example.demo.model.user.User;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="user_details")
public class UserDetails {
    @Id
    private Long nik;
    private String nama;
    private int golongan;
    private String posisi;
    private String keluargaJabatan;
    private String level;
    private String noHp;
    private EKaos ukuran;
    private String entitas;
    private String divisi;
    private String kota;
    private String pichHC;


    public UserDetails(){

    }

    public UserDetails(Long nik, String nama, int golongan, String posisi, String keluargaJabatan, String level, String entitas, String divisi, String kota, String pichHC) {
        this.nik = nik;
        this.nama = nama;
        this.golongan = golongan;
        this.posisi = posisi;
        this.keluargaJabatan = keluargaJabatan;
        this.level = level;
        this.entitas = entitas;
        this.divisi = divisi;
        this.kota = kota;
        this.pichHC = pichHC;
    }

    public Long getNik() {
        return nik;
    }

    public void setNik(Long nik) {
        this.nik = nik;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public int getGolongan() {
        return golongan;
    }

    public void setGolongan(int golongan) {
        this.golongan = golongan;
    }

    public String getPosisi() {
        return posisi;
    }

    public void setPosisi(String posisi) {
        this.posisi = posisi;
    }

    public String getKeluargaJabatan() {
        return keluargaJabatan;
    }

    public void setKeluargaJabatan(String keluargaJabatan) {
        this.keluargaJabatan = keluargaJabatan;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getNoHp() {
        return noHp;
    }

    public void setNoHp(String noHp) {
        this.noHp = noHp;
    }

    public EKaos getUkuran() {
        return ukuran;
    }

    public void setUkuran(EKaos ukuran) {
        this.ukuran = ukuran;
    }

    public String getEntitas() {
        return entitas;
    }

    public void setEntitas(String entitas) {
        this.entitas = entitas;
    }

    public String getDivisi() {
        return divisi;
    }

    public void setDivisi(String divisi) {
        this.divisi = divisi;
    }

    public String getKota() {
        return kota;
    }

    public void setKota(String kota) {
        this.kota = kota;
    }

    public String getPichHC() {
        return pichHC;
    }

    public void setPichHC(String pichHC) {
        this.pichHC = pichHC;
    }

}

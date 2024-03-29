package com.example.demo.model.logevent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;
@Entity
public class LogEvent {
    @Id
    private String email;
    @Column(name = "lastLogin")
    private Timestamp login;
    @Column(name = "logoutOnClick")
    private Timestamp logout;
    public LogEvent(){

    }

    public LogEvent(String email, Timestamp login) {
        this.email = email;
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getLogin() {
        return login;
    }

    public Timestamp getLogout() {
        return logout;
    }

    public void setLogout(Timestamp logout) {
        this.logout = logout;
    }

    public void setLogin(Timestamp login) {
        this.login = login;
    }
}

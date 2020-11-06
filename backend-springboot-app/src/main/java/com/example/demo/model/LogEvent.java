package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
public class LogEvent {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private Timestamp login;
    private Timestamp logout;

    public LogEvent(){

    }

    public LogEvent(String username, Timestamp login) {
        this.username = username;
        this.login = login;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Timestamp getLogin() {
        return login;
    }

    public void setLogin(Timestamp login) {
        this.login = login;
    }

    public Timestamp getLogout() {
        return logout;
    }

    public void setLogout(Timestamp logout) {
        this.logout = logout;
    }
}

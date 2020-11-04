package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Member {

    @Id
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "MEMBER_ROLES", joinColumns = {
            @JoinColumn(name = "MEMBER_EMAIL", referencedColumnName = "email")}, inverseJoinColumns = {
            @JoinColumn(name = "ROLE_NAME", referencedColumnName = "name") })
    private List<Role> role;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Role> getRole() {
        return role;
    }

    public void setRole(List<Role> role) {
        this.role = role;
    }

    public Member(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Member(){

    }
}

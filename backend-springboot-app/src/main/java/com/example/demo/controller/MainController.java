package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String home(){
        return ("<h1>Welcome</h1");
    }

    @GetMapping("/user")
    public String getHome(){
        return ("<h1>Welcome User</h1");
    }

    @GetMapping("/admin")
    public String admin(){
        return ("<h1>Welcome Admin</h1");
    }

}
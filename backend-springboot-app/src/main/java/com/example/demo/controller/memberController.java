package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class memberController {
    @GetMapping("/login")
    public String showLoginForm(){
        return "login";
    }

}

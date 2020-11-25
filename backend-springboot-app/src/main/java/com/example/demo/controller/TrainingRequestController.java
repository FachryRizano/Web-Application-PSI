package com.example.demo.controller;

import com.example.demo.model.user.User;
import com.example.demo.model.user.userdetails.UserDetails;
import com.example.demo.payloads.request.LoginRequest;
import com.example.demo.payloads.response.JwtResponse;
import com.example.demo.repository.UserDetailsRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test/")
@RestController
public class TrainingRequestController {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private UserRepository userRepository;


    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("training-request")
    public ResponseEntity<?> getUserDetailsByUserId(){
        return ResponseEntity.ok(userDetailsRepository.findAll());
    }
}

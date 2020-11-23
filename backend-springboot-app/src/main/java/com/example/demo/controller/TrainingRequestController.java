package com.example.demo.controller;

import com.example.demo.model.user.User;
import com.example.demo.model.user.userdetails.UserDetails;
import com.example.demo.payloads.request.LoginRequest;
import com.example.demo.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RequestMapping("api/test/")
@RestController
public class TrainingRequestController {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("training-request")
    public ResponseEntity<?> getUserDetailsByUserId(@RequestBody User user){
        UserDetails userDetails = userDetailsRepository.findById(user.getId())
                .orElseThrow(()-> new RuntimeException("can't find the user details"));
        return ResponseEntity.ok(userDetails);
    }
}

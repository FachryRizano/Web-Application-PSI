package com.example.demo.controller;

import com.example.demo.model.user.User;
import com.example.demo.model.user.userdetails.UserDetails;
import com.example.demo.payloads.request.LoginRequest;
import com.example.demo.payloads.response.JwtResponse;
import com.example.demo.repository.UserDetailsRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.AuthTokenFilter;
import com.example.demo.security.jwt.JwtUtils;
import io.jsonwebtoken.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @Autowired
    private AuthTokenFilter authTokenFilter;

    @Autowired
    private JwtUtils jwtUtils;

    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("training-request/{id}")
    public ResponseEntity<?> getUserDetailsByUserId(@PathVariable Long id){
        User user = userRepository.findById(id)
                .orElseThrow(()->new RuntimeException("User details not found"));
        return ResponseEntity.ok(user.getUserDetails());
    }
}

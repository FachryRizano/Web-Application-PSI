package com.example.demo.service;

import com.example.demo.model.Employee;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface EmployeeService extends UserDetailsService {

    Employee findyByEmail(String email);
    Employee save(UserRegistrationDto registration);
}

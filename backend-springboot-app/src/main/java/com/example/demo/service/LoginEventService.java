package com.example.demo.service;

import com.example.demo.repository.LoginEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LoginEventService {
    @Autowired
    private LoginEventRepository loginEventRepository;

    public void save(LoginEvent loginEvent){
        loginEventRepository.save(loginEvent);
    }
}

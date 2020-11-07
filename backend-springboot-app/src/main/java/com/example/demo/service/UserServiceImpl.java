package com.example.demo.service;

import com.example.demo.model.LogEvent;
import com.example.demo.model.MyUserDetails;
import com.example.demo.model.User;
import com.example.demo.repository.LogEventRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;

@Service
public class UserServiceImpl implements UserDetailsService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LogEventRepository logEventRepository;

    @Autowired
    private LogEventService logEventService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user==null){
            throw new UsernameNotFoundException("User not found");
        }
        LogEvent logEvent = new LogEvent();
        logEvent.setUsername(username);
        logEvent.setLogin(new Timestamp(new Date().getTime()));
        logEventService.save(logEvent);
        return new MyUserDetails(user);
    }
}

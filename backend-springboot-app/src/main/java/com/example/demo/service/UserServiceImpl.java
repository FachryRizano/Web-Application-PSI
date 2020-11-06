package com.example.demo.service;

import com.example.demo.model.LoginEvent;
import com.example.demo.model.MyUserDetails;
import com.example.demo.model.User;
import com.example.demo.repository.LoginEventRepository;
import com.example.demo.repository.UserRepository;
import org.hibernate.dialect.MySQL5Dialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserDetailsService{
    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user==null){
            throw new UsernameNotFoundException("User not found");
        }
        //init timestamp di loginEvent
        LoginEvent event = new LoginEvent();
        LoginEventService loginEventService = new LoginEventService();
        event.setUsername(user.getUsername());
        event.setLogin(new Timestamp(new Date().getTime()));
        //masukkan ke dalam LoginEvent Entity
        loginEventService.save(event);

        return new MyUserDetails(user);
    }
}

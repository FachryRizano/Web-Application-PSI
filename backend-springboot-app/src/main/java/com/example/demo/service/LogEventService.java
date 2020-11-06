package com.example.demo.service;

import com.example.demo.model.LogEvent;
import com.example.demo.model.LogEventDetails;
import com.example.demo.model.User;
import com.example.demo.repository.LogEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;

@Service
@Transactional
public class LogEventService {

    @Autowired
    private LogEventRepository logEventRepository;

    public LogEventDetails loadLogEventByUsername(String username){
        LogEvent logEvent = logEventRepository.findByUsername(username);
        if(logEvent == null){
            logEvent.setUsername(username);
            logEvent.setLogin(new Timestamp(new Date().getTime()));
        }
        return new LogEventDetails(logEvent);
    }

    public void save(LogEvent logEvent){
        logEventRepository.save(logEvent);
    }
}

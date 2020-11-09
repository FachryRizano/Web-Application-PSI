package com.example.demo.security.services;

import com.example.demo.model.LogEvent;
import com.example.demo.repository.LogEventRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class LogEventService {

    @Autowired
    private LogEventRepository logEventRepository;

    public void save(LogEvent logEvent){
        logEventRepository.save(logEvent);
    }
}

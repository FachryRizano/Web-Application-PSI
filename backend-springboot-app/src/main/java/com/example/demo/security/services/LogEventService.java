package com.example.demo.security.services;

import com.example.demo.model.logevent.LogEvent;
import com.example.demo.repository.LogEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogEventService {

    @Autowired
    private LogEventRepository logEventRepository;

    public void save(LogEvent logEvent){
        logEventRepository.save(logEvent);
    }
}

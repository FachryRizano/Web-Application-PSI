package com.example.demo.service;

import com.example.demo.model.LogEvent;
import com.example.demo.repository.LogEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LogEventService {
    @Autowired
    private LogEventRepository logEventRepository;

    public void save(LogEvent logEvent){
        logEventRepository.save(logEvent);
    }
}

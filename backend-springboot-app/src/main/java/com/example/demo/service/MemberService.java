package com.example.demo.service;

import com.example.demo.model.Member;
import com.example.demo.model.Role;
import com.example.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public Member createMember(Member member){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        member.setPassword(encoder.encode(member.getPassword()));
        Role memberRole = new Role("ADMIN");
        List<Role> roles = new ArrayList<>();
        roles.add(memberRole);
        memberRepository.save(member);
        return member;
    }
}

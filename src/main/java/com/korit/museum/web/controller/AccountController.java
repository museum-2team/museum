package com.korit.museum.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {

    @GetMapping("/login")
    public String login(){
        return "account/login";
    }

    @GetMapping("/register")
    public String register(){
        return "account/register";
    }

}

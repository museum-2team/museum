package com.korit.museum.web.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class AccountController {

    @GetMapping("/login")
    public String login() {
        return "account/login";
    }

    @GetMapping("/register")
    public String register() {
        return "account/register";
    }

}

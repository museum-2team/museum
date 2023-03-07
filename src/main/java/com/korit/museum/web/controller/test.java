package com.korit.museum.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/painting")
public class test {
    @GetMapping("/add")
    public String add()  {
        return "admin/painting/painting_add";
    }
    @GetMapping("/edit")
    public String edit() {
        return "admin/painting/painting_edit";
    }
    @GetMapping("/search")
    public String search() {
        return "admin/painting/painting_search";
    }
}

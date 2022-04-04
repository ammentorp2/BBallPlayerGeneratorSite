package com.example.backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import service.PlayerCreatorService;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping(value="/genRandomPlayerTest")
    @ResponseBody
    public String generateRandomPlayer(){
        return PlayerCreatorService.createPlayer().toString();
    }

}
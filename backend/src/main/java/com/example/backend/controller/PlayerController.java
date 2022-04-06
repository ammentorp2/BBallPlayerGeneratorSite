package com.example.backend.controller;

import model.Player;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import service.PlayerCreatorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {
    @GetMapping(value="/getRandomPlayer")
    @ResponseBody
    public ResponseEntity<Player> generateRandomPlayer(){
        return ResponseEntity.ok().body(PlayerCreatorService.createPlayer());
    }
}

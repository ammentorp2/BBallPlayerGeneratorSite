package com.example.backend.controller;

import model.Player;
import model.Position;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.PlayerCreatorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {
    @GetMapping(value="/getRandomPlayer")
    @ResponseBody
    public ResponseEntity<Player> generateRandomPlayer(){
        return ResponseEntity.ok().body(PlayerCreatorService.createPlayer());
    }

    @GetMapping(value="/getPlayerByPos/{pos}")
    @ResponseBody
    public ResponseEntity<Player> generatePlayerByPos(@PathVariable(value="pos") String pos){
        Position p = Position.valueOf(pos);
        return ResponseEntity.ok().body(PlayerCreatorService.createPlayerByPosition(p));
    }
}

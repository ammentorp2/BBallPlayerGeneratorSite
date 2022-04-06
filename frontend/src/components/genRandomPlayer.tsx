import React from 'react';
import { useState } from 'react';
import { Button } from "@mui/material"
import { getRandomPlayer } from "../API/playerAPI";
import { verifyResponse } from "../util/verifyResponse"

export const GenRandomPlayer = () => {
    const [player,setPlayer] = useState("");

    const handleGetRandomPlayer = () => {
        getRandomPlayer().then(x => {
            if(x==null || !verifyResponse(x)){
                setPlayer("Error with resp. Try again")
            }
            else{
                //console.log(x.data)
                
            }
        })
    }

    return (
        <div className="App">
          <Button onClick={() => handleGetRandomPlayer()}>Generate Player:</Button>
          {player}
        </div>
      );
}
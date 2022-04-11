import React, { useState } from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { Player } from '../util/Player';
import {genRandomPlayer} from "../util/GetPlayerFunctions"

export const HomePage = () => {
    const [player,setPlayer] = useState<Player>(new Player());
    console.log(player)
    return(
        <div>
        {
            player.firstName !== ""  ? <div>Hello {player.toString()}</div> 
            : <div><GenPlayerForm setPlayer={setPlayer}></GenPlayerForm></div>
        }
        </div>
        
    )
}
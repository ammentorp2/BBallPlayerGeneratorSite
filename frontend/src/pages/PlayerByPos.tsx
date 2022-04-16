import React from 'react';
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import { Typography } from "@mui/material";
import { getPlayerByPos, getRandomPlayer } from "../API/playerAPI";
import { Player } from '../util/Player';
import { createCareer } from '../util/PlayerTeamFunctions';

export const PlayerByPos = () => {
    const [mounted,setMounted] = useState(false);
    const [player,setPlayer] = useState<Player>(new Player());

    let [searchParams, setSearchParams] = useSearchParams();
    let primaryPos = searchParams.get('primaryPos');
    let secondaryPos = searchParams.get('secondaryPos');

    if(!mounted){
        if(primaryPos == null)
            primaryPos = "PG";
        
        getPlayerByPos(primaryPos,secondaryPos).then((response) => {
            let p = new Player();
            if(response == null){
                console.log("Could not get player!")
            }
            else{
                p.firstName = response.data.firstName;
                p.lastName = response.data.lastName;
                p.primaryPosition = response.data.primaryPosition;
                p.secondaryPosition = response.data.secondaryPosition;
                p.age = response.data.age; 
                p.height = response.data.formattedHeight;
                p.playstyle = response.data.playstyle;
                p.weight = response.data.weight;
            }
            setPlayer(p);
            setMounted(true);
            
        });
    }

    return (
        <div>
        {mounted ?
            <div>
                <Typography>{player.toString()} </Typography>
                <Typography>{createCareer(player)}</Typography>
            </div>
            : null
        }
        </div>
    )
}
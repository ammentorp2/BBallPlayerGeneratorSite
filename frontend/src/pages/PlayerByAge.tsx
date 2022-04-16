import React from 'react';
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import { Typography } from "@mui/material";
import { getRandomPlayer } from "../API/playerAPI";
import { Player } from '../util/Player';
import { createCareer } from '../util/PlayerTeamFunctions';

export const PlayerByAge = () => {
    const [mounted,setMounted] = useState(false);
    const [player,setPlayer] = useState<Player>(new Player());

    let [searchParams, setSearchParams] = useSearchParams();
    let age = searchParams.get('age');

    if(!mounted){
        //gen random player
        //TODO this makes hella calls
        //since age doesn't really affect other things we'll just be efficient (lazy) and call the random function
        getRandomPlayer().then((response) => {
            let p = new Player();
            if(response == null ){
                console.log("Could not get player!")
            }
            else{
                //console.log(response.data);
                p.firstName = response.data.firstName;
                p.lastName = response.data.lastName;
                p.primaryPosition = response.data.primaryPosition;
                p.secondaryPosition = response.data.secondaryPosition;
                if(age == null){
                    p.age = "28"
                }
                else{
                    p.age = age; 
                }
                p.height = response.data.formattedHeight;
                p.playstyle = response.data.playstyle;
                p.weight = response.data.weight;
                //console.log(p);
                   
            }
            setPlayer(p);
            setMounted(true);
        })
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
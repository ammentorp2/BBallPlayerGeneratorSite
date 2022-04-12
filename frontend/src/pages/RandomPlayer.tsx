import React from 'react';
import { useState } from 'react';
import { genRandomPlayer } from '../util/GetPlayerFunctions';
import { Player } from '../util/Player';

export const RandomPlayer = () => {
    const [mounted,setMounted] = useState(false);
    const [player,setPlayer] = useState<Player>();
    if(!mounted){
        //gen random player
        //TODO this is still one step behind
        setPlayer(genRandomPlayer())
        setMounted(true)
    }

    return (
        <div>
        {mounted && player !== undefined ?
            <div>{player?.toString()} </div>
            : null
        }
        </div>
    )
}
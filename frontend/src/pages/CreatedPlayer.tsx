import React from 'react';
import { Player } from '../util/Player';
import {useLocation} from 'react-router-dom';
import { PlayerProp } from '../util/PlayerProp';


export const CreatedPlayer = ({player} : PlayerProp) => {
    console.log(player)
    return(
        <div>
            Hello {player.toString()}
        </div>
    )
}
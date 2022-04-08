import { getRandomPlayer } from "../API/playerAPI";
import { Player } from "./Player";
import { verifyResponse } from "./verifyResponse"

export function genRandomPlayer() : Player{
    let p = new Player();
    getRandomPlayer().then(x => {
        if(x==null || !verifyResponse(x)){
            
        }
        else{
            p.firstName = x.data.firstName;
            p.lastName = x.data.lastName;
            p.primaryPosition = x.data.primaryPosition;
            p.secondaryPosition = x.data.secondaryPosition;
            p.age = x.data.age; 
            console.log(x.data);
            return p;   
        }
    })
    
    return p;
}
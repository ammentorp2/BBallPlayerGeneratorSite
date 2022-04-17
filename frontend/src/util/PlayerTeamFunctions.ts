import { Player } from "./Player";

export function createCareer(player : Player) : String{
    return player.firstName + " " + player.lastName + " ends up averaging 40 a night in China";
}
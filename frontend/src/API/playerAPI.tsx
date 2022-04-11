import axios from "axios";

export async function getRandomPlayer(){
    try{
        return axios.get("getRandomPlayer")
    }catch(e){
        return null;
    }
}
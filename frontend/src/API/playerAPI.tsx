import axios from "axios";

export async function getRandomPlayer(){
    try{
        return await axios.get("getRandomPlayer")
    }catch(e){
        return null;
    }
}
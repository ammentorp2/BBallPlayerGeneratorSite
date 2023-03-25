import axios from "axios";

export async function getRandomPlayer(){
    try{
        const response = await axios.get("getRandomPlayer")
        if (!response) {
            throw new Error("API error");
        }
        return response;
    }catch(e){
        return null;
    }
}
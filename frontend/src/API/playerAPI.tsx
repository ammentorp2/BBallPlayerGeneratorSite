import axios from "axios";

export async function getRandomPlayer(){
    try{
        return await axios.get("getRandomPlayer");
    }catch(e){
        return null;
    }
}

export async function getPlayerByPos(primaryPos : String , secondaryPos : String | null){
    if(secondaryPos == null){
        try{
            return await axios.get("getPlayerByPos/" + primaryPos);
        }catch(e){
            return null;
        }
    }
    else{
        try{
            return await axios.get("getPlayerByPos/" + primaryPos + "/" + secondaryPos);
        }catch(e){
            return null;
        }
    }
}
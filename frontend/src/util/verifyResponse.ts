import { AxiosResponse } from "axios";

export function verifyResponse(response : AxiosResponse<any, any> | null) : Boolean{
    if(response == null)
        return false;
        
    return true;
}
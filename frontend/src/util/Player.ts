export class Player{

    firstName : string;
    lastName : string;
    primaryPosition : string;
    secondaryPosition : string;
    age : string;
    height : string;
    playstyle : string;
    weight : string;
    
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.primaryPosition = "";
        this.secondaryPosition = "";
        this.age = "";
        this.height = "";
        this.playstyle = "";
        this.weight = "";
    }

    toString() : String{
        //TODO format this more
        
        let res = this.firstName + " " + this.lastName + "\n" + this.height + ","
                    + this.weight + "lbs | " + this.primaryPosition;
        if(this.secondaryPosition != null)
            res += "/" + this.secondaryPosition;

        res += "\n" + this.age + " year old " + this.playstyle;
        return res;
    }
}
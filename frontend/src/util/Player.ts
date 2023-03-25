export class Player{

    firstName : string;
    lastName : string;
    primaryPosition : string;
    secondaryPosition : string;
    age : string;
    playstyle: string;
    height : string;
    weight : number;
    
    constructor(){
        this.firstName = "New";
        this.lastName = "Player";
        this.primaryPosition = "PG";
        this.secondaryPosition = "";
        this.age = "18";
        this.playstyle = "";
        this.height = "";
        this.weight = 0;
    }

    toString() : String{
        let res = this.firstName + " " + this.lastName + "\n" + this.height + ","
                    + this.weight + "lbs | " + this.primaryPosition;
        if(this.secondaryPosition != null)
            res += "/" + this.secondaryPosition;

        res += "\n" + this.age + " year old " + this.playstyle;
        return res;
    }
}
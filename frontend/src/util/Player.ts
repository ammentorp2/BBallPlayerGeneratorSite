export class Player{

    firstName : string;
    lastName : string;
    primaryPosition : string;
    secondaryPosition : string;
    age : string;
    
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.primaryPosition = "";
        this.secondaryPosition = "";
        this.age = "";
    }

    getFormattedHeight(){
        
    }

    toString() : String{
        return this.firstName + "," + this.lastName;
    }
}
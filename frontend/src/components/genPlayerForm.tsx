import React from 'react';
import { useState } from 'react';
import { Button, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { Player } from "../util/Player"
import { getRandomPlayer } from '../API/playerAPI';

export const GenPlayerForm = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    const [primaryPos,setPrimaryPos] = useState('');
    const [secondaryPos,setSecondaryPos] = useState('');

    const primaryPosOptions = ['PG','SG','SF','PF','C'];
    const [secondaryPosOptions,setSecondaryPosOptions] = useState(['']);

    const [age,setAge] = useState("Random");
    const ageOptions = ["Random",19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

    const [player,setPlayer] = useState<Player>();

    const handleSetPlayerFromResponse = (x : any) => {
        let p = new Player();
        p.firstName = x.data.firstName;
        p.lastName = x.data.lastName;
        p.primaryPosition = x.data.primaryPosition;
        p.secondaryPosition = x.data.secondaryPosition;
        p.age = x.data.age; 
        p.playstyle = x.data.playstyle;
        p.height = x.data.formattedHeight;
        p.weight = x.data.weight;
        setPlayer(p);
    };

    const handleCreatePlayer = () => {
        if(firstName === "" && lastName === ""){
            //random name

            if(primaryPos === ''){
                //random pos

                if(age === "Random"){
                    //True random player
                    getRandomPlayer().then((x: any) => {
                        handleSetPlayerFromResponse(x);
                    });
                }
                else{
                    //create player by age

                }
            }
            else{
                //rand name but pos
                if(secondaryPos === ''){
                    if(age === "Random"){
                        //create player by pos

                    }
                    else{
                        //create player by pos and age

                    }
                }
                else{
                    if(age === "Random"){
                        //create player by pos,pos

                    }
                    else{
                        //create player by pos,pos and age

                    }
                }
            }
        }
        else{
            //create player by name
            if(primaryPos === ''){
                //random pos

                if(age === "Random"){
                    //player by age

                }
                else{
                    //create player by name and age

                }
            }
            else{
                // name and pos
                if(secondaryPos === ''){
                    if(age === "Random"){
                        //create player by name and pos

                    }
                    else{
                        //create player by name pos and age

                    }
                }
                else{
                    if(age === "Random"){
                        //create player by name and pos,pos

                    }
                    else{
                        //create player by name pos,pos and age

                    }
                }
            }
        }
    }

    const handleChangePrimaryPos = (pos : string) => {
        setPrimaryPos(pos)

        handleChangeSecondaryOptions(pos);
    }

    const handleChangeSecondaryOptions = (pos : string) => {
        let secondaryList = [];
        switch(pos){
            case "PG":
                secondaryList.push('SG')
                break;
            case "SG":
                secondaryList.push('PG','SF');
                break;
            case "SF":
                secondaryList.push('SG','PF');
                break;
            case "PF":
                secondaryList.push('SF','C');
                break;
            case "C":
                secondaryList.push('PF');
                break;
        }
        setSecondaryPosOptions(secondaryList);
        setSecondaryPos('')
    }

    const handlePosClear = () => {
        setPrimaryPos('')
        setSecondaryPos('')
    }

    return (
        <div>
            <Grid>
                <Grid item>
                <header >Create a player</header>
                    All of these fields are optional, if not set they will be created for you!
                </Grid>
                <Grid item>
                    First name: <TextField onChange={e => {setFirstName(e.target.value)}}>{firstName}</TextField>
                </Grid>
                <Grid item>
                    Last name: <TextField onChange={e => {setLastName(e.target.value)}}>{lastName}</TextField>
                </Grid>
                <Grid item>
                    Primary Position: <Select label="Primary Position" value={primaryPos} onChange={e => {
                        handleChangePrimaryPos(e.target.value)}}>
                        {
                            primaryPosOptions.map(p =>(
                                <MenuItem key={p} value={p}>{p}</MenuItem>
                            ))
                        }
                    </Select>
                </Grid>
                <Grid item>
                    Secondary Position: <Select disabled={primaryPos===''} label="Secondary Position" value={secondaryPos} 
                    onChange={e => {
                        setSecondaryPos(e.target.value)}}>
                            {
                                secondaryPosOptions.map(p =>(
                                    <MenuItem key={p} value={p}>{p}</MenuItem>
                                ))
                            }
                        </Select>
                </Grid>
                <Grid item>
                    <Button color="warning" variant="contained" onClick={handlePosClear}>Clear Positions</Button>
                </Grid>
                <Grid item>
                    Age: <Select label="Age" value={age} onChange={e => {
                        setAge(e.target.value)}}>
                            {
                                ageOptions.map(a =>(
                                    <MenuItem key={a} value={a}>{a}</MenuItem>
                                ))
                            }
                        </Select>
                </Grid>
                <Grid item>
                    <Button color="success" variant="contained" onClick={() => handleCreatePlayer()}>Generate Player</Button>
                </Grid>
                <Grid item>
                    <Typography>Player: {(player) ? player.toString() : ''}</Typography>
                </Grid>
            </Grid>
        </div>
      );
}
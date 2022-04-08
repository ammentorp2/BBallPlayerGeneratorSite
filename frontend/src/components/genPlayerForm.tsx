import React from 'react';
import { useState } from 'react';
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material"

export const GenPlayerForm = () => {
    //name position(s) and age
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    const [primaryPos,setPrimaryPos] = useState('');
    const [secondaryPos,setSecondaryPos] = useState('');

    const primaryPosOptions = ['PG','SG','SF','PF','C'];
    const [secondaryPosOptions,setSecondaryPosOptions] = useState(['']);

    const [age,setAge] = useState("28");
    const ageOptions = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

    const handleCreatePlayer = () => {
        console.log(firstName,lastName,primaryPos,secondaryPos,age);
    }

    const handleChangePrimaryPos = (pos : string) => {
        //TODO calc secondary pos from here
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

    return (
        <div>
            <header>Create a player</header>
            All of these fields are optional, if not set they will be created for you!
            <Grid>
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
                    Secondary Position: <Select label="Secondary Position" value={secondaryPos} onChange={e => {
                        setSecondaryPos(e.target.value)}}>
                            {
                                secondaryPosOptions.map(p =>(
                                    <MenuItem key={p} value={p}>{p}</MenuItem>
                                ))
                            }
                        </Select>
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
            </Grid>
            
          <Button color="success" variant="contained" onClick={handleCreatePlayer}>Generate Player</Button>
        </div>
      );
}
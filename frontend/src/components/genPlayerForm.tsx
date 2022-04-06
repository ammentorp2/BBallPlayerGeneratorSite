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
    const secondaryPosOptions = [];

    const [age,setAge] = useState(0);

    const handleCreatePlayer = () => {
        console.log(firstName)
    }

    const handleChangePrimaryPos = (pos : string) => {
        //TODO calc secondary pos from here
        setPrimaryPos(pos)
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
            </Grid>
            
          <Button color="success" variant="contained" onClick={handleCreatePlayer}>Generate Player</Button>
        </div>
      );
}
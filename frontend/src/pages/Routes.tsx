import React, { useState } from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { Player } from '../util/Player';
import {genRandomPlayer} from "../util/GetPlayerFunctions"
import { RandomPlayer } from './RandomPlayer';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<GenPlayerForm />} />
            <Route path='randPlayer' element={<RandomPlayer />} />
        </Routes>
        
    )
}
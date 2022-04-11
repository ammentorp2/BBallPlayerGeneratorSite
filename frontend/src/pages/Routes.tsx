import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { CreatedPlayer } from './CreatedPlayer';
import { Player } from '../util/Player';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<GenPlayerForm />} />
            <Route path="/createdPlayer" element={<CreatedPlayer player={new Player()}/>} />
        </Routes>
        
    )
}
import React from 'react';
import { Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { PlayerByAge } from './PlayerByAge';
import { RandomPlayer } from './RandomPlayer';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<GenPlayerForm />} />
            <Route path='/player' element={<RandomPlayer />} />
            <Route path='/playerByAge' element={<PlayerByAge />} />
        </Routes>
        
    )
}
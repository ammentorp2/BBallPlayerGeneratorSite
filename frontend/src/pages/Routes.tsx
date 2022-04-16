import React from 'react';
import { Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { RandomPlayer } from './RandomPlayer';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<GenPlayerForm />} />
            <Route path='/randPlayer' element={<RandomPlayer />} />
        </Routes>
        
    )
}
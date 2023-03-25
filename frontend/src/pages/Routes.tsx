import React, { useState } from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';
import { Player } from '../util/Player';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<GenPlayerForm />} />
        </Routes>
        
    )
}
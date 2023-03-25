import React from 'react';
import { Route , Routes} from 'react-router-dom';
import { GenPlayerForm } from '../components/genPlayerForm';

export const PageRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<GenPlayerForm />} />
        </Routes>
    
    )
}
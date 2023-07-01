import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AppRoutes from './routes/AppRoutes';

function App() {
    useAuth();
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default React.memo(App);

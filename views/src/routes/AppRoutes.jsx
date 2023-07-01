import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import Login from '../auth/Login';
import Register from '../auth/Register';
import BookDetails from '../frontend/pages/BookDetails';
import Error from '../frontend/pages/Error';
import Home from '../frontend/pages/Home';
import Review from '../frontend/pages/Review';
import AppLayout from '../layout/AppLayout';

function AppRoutes() {
    return (
        <Routes>
            {/* =========================== 
                        Frontend Route
            =============================== */}
            <Route
                element={
                    <AppLayout>
                        <Outlet />
                    </AppLayout>
                }
            >
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<BookDetails />} forceRefresh />
                <Route path="/review" element={<Review />} forceRefresh />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Route>

            {/* =========================== 
                        Admin Route
            =============================== */}
            <Route
                path="/dashboard"
                element={
                    <AppLayout>
                        <Outlet />
                    </AppLayout>
                }
            >
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRoutes;

import React from 'react';
import { Navigate } from 'react-router-dom';

export function AuthRoute({ authenticated, children }) {
    const auth = authenticated;
    return auth ? children : < Navigate to = "/login" /> ;
}
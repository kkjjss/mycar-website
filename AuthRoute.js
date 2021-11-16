import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login } from '../../pages/index';
import { signIn } from './auth';

export function AuthRoute({ authenticated, children }) {
    const auth = authenticated;
    return auth ? children : < Navigate to = "/login" / > ;
}
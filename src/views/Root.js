import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes/index';
import Home from '../views/Home';
import MainTemplate from '../templates/MainTemplate'

const Root = () => {
    return (
        <BrowserRouter>
            <MainTemplate>
                <Routes>
                    <Route exact path={routes.home} element={<Home />}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    )
    
};

export default Root;
import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Main/>
            
        </>
    );
};

export default Layout;
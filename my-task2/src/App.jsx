import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Shop from './pages/Shop';
import Lookbook from './pages/Lookbook';
import Features from './pages/Features';
import Pages from './pages/Pages';
import Block from './pages/block';

const App = () => {
    return (
        <>
            
            <Routes>
                <Route path='/' element={<Layout/>}> 
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/lookbook' element={<Lookbook/>}/>
                    <Route path='/features' element={<Features/>}/>
                    <Route path='/pages' element={<Pages/>}/>
                    <Route path='/block' element={<Block/>}/>
                </Route>    
            </Routes>
            
        </>
    );
};

export default App;
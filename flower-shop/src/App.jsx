import React from 'react';
import './assets/styles/App.scss'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ShopAll from './components/pages/shopAll/ShopAll';
import OneProduct from './components/pages/oneProduct/OneProduct';


const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<ShopAll/>} />
                    <Route path='oneProduct' element={<OneProduct/>} />

                </Route>
            </Routes>
        </>
    );
};

export default App;
import React from 'react';
import './assets/styles/App.scss'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ShopAll from './components/pages/shopAll/ShopAll';
import OneProduct from './components/pages/oneProduct/OneProduct';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import SimpleModal from './components/pages/simpleModal/SimpleModal';
import SimpleModalLog from './components/pages/simpleModalLog/SimpleModalLog';
import { useEffect } from 'react';
import { registerUser } from './store/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getAllFlowers} from './store/flowersSlice';
import NotFound from './components/pages/notFound/NotFound';

const App = () => {        
    const dispatch = useDispatch()

    useEffect(() => {
        axios('http://localhost:8080/flowers')
            .then(({data}) =>  {
                dispatch(getAllFlowers(data)) 
                })
            
    },[dispatch])

    useEffect(() => {
        const savedUser = localStorage.getItem('user')

        if (savedUser) {
            const userData = JSON.parse(savedUser)
            dispatch(registerUser(userData))
        }
    },[dispatch])

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<ShopAll/>} />
                    <Route path='oneProduct/:id' element={<OneProduct/>} />
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <SimpleModal/>
            <SimpleModalLog/> 
        </>
    );
};

export default App;
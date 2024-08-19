import React, { useState } from 'react';
import "./simpleModallog.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setLoginClose } from '../../../store/logModalSlice';
import axios from 'axios';
import { registerUser } from '../../../store/userSlice';
import { useNavigate } from "react-router-dom";

const SimpleModalLog = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isOpenLog = useSelector(state => state.logSlice.loginClose)

    const closeModal = () => {
        dispatch(setLoginClose(false))
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")

    const loginUser = async (e) => {
        e.preventDefault()
        
        
        let userLogin = {
            email,
            password
        }
        try {
            const response = await axios.post('http://localhost:8080/login', userLogin)
            const userData = response.data;

            localStorage.setItem("user", JSON.stringify(userData))
        
            if (userData) {

                dispatch(registerUser(userData))
                setErr("")
                closeModal()
                navigate('/')
            } 
        } catch (err) {
            if (err.response.status === 400) {
                setErr("Incorrect login or password")
            } else {
                setErr("Error connecting to server")
            }           
        }
    } 

    return (
        <>
        {isOpenLog && (
            <div className="modal" >
                <div className="modal__wrapper">
                    <form onSubmit={(e) => loginUser(e)} className="modal__formRegistration">
                        <h2>Login</h2>
                        <label >
                            <input onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Email' required/>
                        </label>
                        <label >
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required/>
                        </label>
                        {err && <p className="error">{err}</p>}
                        <button className='modal__create-btn'>Login</button>
                        <button className="modal__close-btn" onClick={closeModal}>X</button>
                    </form>
                </div>
            </div>
        )}
        </>

    );
};

export default SimpleModalLog;
import React, { useState} from 'react';
import './simpleModal.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationClose } from '../../../store/regModalSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../../store/userSlice';





const SimpleModal = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.regSlice.registrationClose)

    const closeModal = () => {
        dispatch(setRegistrationClose(false))
    }   

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    

    const registerUsers = async (e) => {
        e.preventDefault()

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        let user = {
            name,
            email,
            password
        }
        try {
            const response = await axios.post('http://localhost:8080/users', user);
            const userData = response.data
            localStorage.setItem('user', JSON.stringify(userData))
            dispatch(registerUser(userData));
            navigate('/');
            closeModal();
        } catch (error) {
            if (error.response.status === 400) {
                setError('account already exists')
            } else {
                setError("Error connecting to server");
            }
            
        }
        
    }
        return (
            <>
            {isOpen && (
                <div className="modal" >
                    <div className="modal__wrapper">
                        <form onSubmit={(e) => registerUsers(e)} className="modal__formRegistration">
                            <h2>Sign Up</h2>
                            <label htmlFor='name'>
                                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Username' required />
                            </label>
                            <label >
                                <input onChange={(e)=>setEmail(e.target.value)}  type="Email" placeholder='Email' required/>
                            </label>
                            <label >
                                <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Password' required/>
                            </label>
                            {error && <p className="error">{error}</p>}
                            <button className='modal__create-btn'>Create Account</button>
                            <button className="modal__close-btn" onClick={closeModal}>X</button>
                        </form>
                    </div>
                </div>
            )}
            </>
        );    
};

export default SimpleModal;
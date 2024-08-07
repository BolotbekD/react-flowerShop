import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import iconAcc from '../icons/icon-acc.png'
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationClose } from '../../../store/regModalSlice';
import SimpleModal from '../../pages/simpleModal/SimpleModal';
import { setLoginClose } from '../../../store/logModalSlice';
import SimpleModalLog from '../../pages/simpleModalLog/SimpleModalLog';
import { logOut } from '../../../store/userSlice';

const MenuAccount = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const isOpenModel = useSelector(state => state.regSlice.registrationClose)
    const isOpenLogModal = useSelector(state => state.logSlice.loginClose)
    const user = useSelector(state => state.userSlice.user)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        
    };
    const handleClose = () => {
        setAnchorEl(null);   
    }

    const logOutAccount = () => {
        dispatch(logOut())
        handleClose()
        localStorage.removeItem('user')
    }

    const handleMenuItemClick = () => {
        handleClose();
        dispatch(setRegistrationClose(true));
    };
    const handleLogInClick = () => {
        handleClose();
        dispatch(setLoginClose(true));
    };
    
    return (
        <div>
             <Button  style={{padding: 0, minWidth: 0}}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                <img src={iconAcc} alt="icon-cart" />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
                {!user && (
                    <MenuItem onClick={handleMenuItemClick}>Sign Up</MenuItem>
                )}
                 {!user && (
                    <MenuItem onClick={handleLogInClick}>Sign In</MenuItem>  
                )} 
                {user && (
                    <MenuItem onClick={logOutAccount}>Logout</MenuItem>
                )}
                
            </Menu>
            <SimpleModal isOpen = {isOpenModel}/>
            <SimpleModalLog isOpenLog = {isOpenLogModal}/>
        </div>
    );
};

export default MenuAccount;
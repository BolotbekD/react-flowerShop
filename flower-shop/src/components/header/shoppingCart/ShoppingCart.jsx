// import React from 'react';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import iconCart from '../icons/icon-cart.png'
import { useSelector } from 'react-redux';




const ShoppingCart = () => {
    const totalCount = useSelector(state => state.cartSlice.cart ? state.cartSlice.cart.reduce((total, item) => total + item.count, 0) : 0)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
      const displayCount = totalCount === 0 ? '0' : totalCount > 9 ? '+9' : totalCount;
    return (
        <>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={displayCount} color="secondary">
                <img src={iconCart} alt="icon-cart"/>
            </StyledBadge>
        </IconButton>
        </>
    );
};

export default ShoppingCart;
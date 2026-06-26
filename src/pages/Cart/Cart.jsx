import React from 'react'
import { Typography, Divider } from '@mui/material'

const Cart = () => {
  return (
    <>
       <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          mt: 3,
          
          
        }}
      >
        CART ITEMS
      </Typography>

      <Divider
        sx={{
          width: "120px",
          mx: "auto",
          my: 2,
          borderBottomWidth: 3,
          bgcolor: "#1976d2",
          
        }}
         />
    </>
  )
}

export default Cart

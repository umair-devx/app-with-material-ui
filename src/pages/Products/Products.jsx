import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "18px",
  cursor: "pointer",

  // Shadow
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

  // Animation
  transition: "all 0.3s ease-in-out",

  // Hover Effect
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    background: "linear-gradient(135deg, #bbdefb, #90caf9)",
  },

  color: theme.palette.text.primary,
}));

const Products = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(res => {
        console.log(res);
        setData(res.data.products)
      })
      .catch((err) => {
        setError(true)

      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

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
        Products
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
      {
        loading && <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress size={100} />
        </Box>


      }
      {
        error && <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="error" fontWeight="bold">
            ⚠️ Error
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {error}
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </Box>
      }

      {
        <Box sx={{ flexGrow: 1, p: 3 ,background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",}} >
          <Grid
            container
            spacing={3}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((item) => (
              <Grid key={item.id} size={{ xs: 4, sm: 4, md: 4 }}>
                <Item>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                  <p>{item.description.slice(0, 70)}...</p>

                  <h3>${item.price}</h3>

                  <Button
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      padding: "5px 20px",
                      borderRadius: "10px",
                      margin: "10px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#0d47a1",
                      },
                    }}
                    variant="contained" disableElevation>
                    Buy Now
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>

      }



    </>
  )
}

export default Products

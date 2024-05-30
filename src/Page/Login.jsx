import React, { useState } from 'react';
import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import supabase from '../Services/Supabase';

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false); 
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("something went wrong");

  const login = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
  
    if (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } else if (data) {
      if (data.user) {
        navigate("/dashboard");
      } else {
        setIsError(true);
        setErrorMessage("Invalid email or password");
      }
    }
  };

  return (
    <Box sx={{ width: "400px", margin: "5px auto", display: "flex", alignItems: "center", height: "95vh" }}>
      <Container maxWidth="xs" component={Paper} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ p: 1, fontWeight: "bold" }}>Login</Typography>
        {
          isError && 
          <Box>
            <Typography color="red" align="center">{errorMessage}</Typography>
          </Box>
        }
        <Box sx={{ p: 1 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <TextField
            type={showPassword ? "text" : "password"}
            fullWidth
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <Button 
            size="small" 
            fullWidth 
            onClick={login} 
            variant="contained" 
            endIcon={<LoginOutlinedIcon />}>
            Login
          </Button>
        </Box>
        <Typography align="center">or</Typography>
        <Box sx={{ p: 1 }}>
          <Link to="/signup">
          <Button
            size="small"
            fullWidth
            variant="contained"
            endIcon={<PersonAddAltOutlinedIcon />}>
            Sign up
          </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

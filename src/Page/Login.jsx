import React, { useState } from 'react';
import { Container, Box, Paper, TextField, Button, Typography, InputAdornment, IconButton, CssBaseline, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    setIsError(true);
  };

  return (
    <Box sx={{ width: "400px", margin: "5px auto", alignContent: "center", height: "95vh" }}>
      <Container maxWidth="xs" component={Paper} sx={{ p: 3 }}>
        <Typography sx={{ p: 1, fontWeight: "Bold" }}>Login</Typography>
        <Box sx={{ p: 1 }}>
          <TextField
            fullWidth
            error={isError}
            helperText={isError ? "Invalid Email" : ""}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <TextField
            type={showPassword ? "text" : "password"}
            fullWidth
            error={isError}
            helperText={isError ? "Invalid Password" : ""}
            label="Password"
            variant="outlined"
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
          <Button size="small" fullWidth onClick={validate} variant="contained" endIcon={<LoginOutlinedIcon />}>Login</Button>
        </Box>
        <Typography align="center">or</Typography>
        <Box sx={{ p: 1 }}>
          <Button
            size="small"
            fullWidth
            onClick={() => navigate('/signup')}
            variant="contained"
            endIcon={<PersonAddAltOutlinedIcon />}>
            Sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

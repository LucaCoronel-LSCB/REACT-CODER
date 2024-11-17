import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const NavBar = ({ cantidadCarrito }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo a la izquierda */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Logoo
        </Typography>

        {/* Opciones de menú a la derecha */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Quiénes Somos</Button>
        </Box>

        {/* Ícono de carrito con contador */}
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <Badge badgeContent={cantidadCarrito} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

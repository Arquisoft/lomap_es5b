import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarsIcon from '@mui/icons-material/Stars';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './Menu.css';
import { Link } from "react-router-dom";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    marginTop: theme.spacing(0),
    minWidth: 250,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menuPrincipal'>
      <Button
        id="menu"
        className='principal'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        size="large"
        startIcon={<MenuIcon />}
      >
        LoMap
      </Button>
      <Menu
        id="demo-customized-menu"
        className='estilo'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <HomeIcon />
          Home
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <FilterAltIcon />
          Filtrar
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <StarsIcon />
          Mapas favoritos
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <PersonSearchIcon />
          Buscar
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <AccountCircleIcon />
          Mi cuenta
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem className='secundarios' onClick={handleClose} disableRipple>
          <QuestionMarkIcon />
          About us
        </MenuItem>
      </Menu>
    </div>
  );
}
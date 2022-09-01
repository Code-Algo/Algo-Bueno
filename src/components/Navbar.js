import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { autocompleteClasses } from '@mui/material';


// const pages = [<a className = 'spanish-btn'>Español</a>, <a className = 'english-btn'>English</a>];
const settings = ['+52 322 688 3167'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className = 'navbar' position="static" style={{ background: '#fafafa' }}>
      <Container className= 'nav' maxWidth="xl">
        <Toolbar disableGutters>
          <Box className='logo-box'>
            <img src='https://res.cloudinary.com/dcksmtfuz/image/upload/v1661623843/algoBueno-logo_rj1zju.png' className='logo'/>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fugaz One',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Algo Bueno 
          </Typography>
          <Typography
            variant="h8"
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Fugaz One',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Algo Bueno
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> 
           */}
          
         

          <Box sx={{ flexGrow: 0 }}>
          <a href = 'https://www.ubereats.com/mx-en/store/algo-bueno-pv/m3bIBLR7TFedy3Iv-00cQg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFsZ28lMjBCdWVubyUyMFBWJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSngyYnRFd0ZGSVlRUjZCbUNWMDZGWFdFJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTIwLjYzNjczMjQlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTA1LjIzMDg5MTMlN0Q%3D&ps=1'><IconButton><iconify-icon icon="simple-icons:ubereats"></iconify-icon></IconButton></a>
          <a href = 'https://www.rappi.com.mx/restaurantes/1923766866-algo-bueno-c.-roma-126'><IconButton><iconify-icon icon="arcticons:rappi"></iconify-icon></IconButton></a>
          {/* <IconButton><iconify-icon icon="arcticons:didi"></iconify-icon></IconButton> */}
            <Tooltip title="Ver Numero">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              
              <Typography
            variant="h6"
            component="a"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'Fugaz One',
              flexDirection: "row",
              color: 'grey',
              ml: '100%'
            }}
          >
            
            <i class="fa-solid fa-phone"></i>
          </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
import './App.css'
import * as React from 'react'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SpecLogoIcon from './Images/SpecLogo.png'
import SpectechAnimated from './Images/tech-fauget-unscreen.gif'
import CountDown from './hooks/CountDown';
import AboutUsIllustration from './Images/aboutus-illustartion.png'
import { Link } from 'react-scroll';

function App() {
  const THREE_DAYS_IN_MS = 78 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const pages = ['Schedule', 'About', 'Events', 'Sponsor', 'Team', 'Glimps'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentPage, setCurrentPage] = useState('Schedule'); // Initialize with the first page

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page)
    handleCloseNavMenu();

    const elementId = page.toLowerCase();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'auto' });
      console.log('Logo clicked'); 
    }
  };

  return (
    <div className="App">
      <div className='mianBody'>
        <div className='navBar'>
          <AppBar position="fixed" className='AppBar'>
            <Container maxWidth="m">
              <Toolbar disableGutters>
                <Button variant="text" style={{display: 'contents'}}>
                <img
                    src={SpecLogoIcon}
                    alt="Spec Logo"
                    className='specLogo'
                    onClick={handleLogoClick} // Add the click handler here
                  />
                </Button>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => handlePageChange(page)}
                        style={{
                          color: currentPage === page ? '#d06c16' : 'inherit',
                          borderBottom: currentPage === page ? '10px solid' : '0px solid',
                          borderBottomColor: currentPage === page ? '#332f79' : 'auto',
                        }}
                      >
                      <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box className="OptionBox" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Link
                      key={page}
                      to={page.toLowerCase()} // Use a lowercase version of the page name as the id
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust the offset as needed to account for your fixed navbar
                      duration={500}
                      style={{ cursor: 'pointer' }}
                    >
                      <Button
                        sx={{
                          my: 2,
                          color: currentPage === page ? '#d06c16' : 'white',
                          borderBottom: currentPage === page ? '2px solid' : '0px solid',
                          borderBottomColor: currentPage === page ? '#332f79' : 'auto',
                          fontFamily: 'Valorant !important',
                          display: 'block',
                        }}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        <Container className='home' id='home' style={{height: '100vh', width: '100vw', fontFamily: 'Valorant', color: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignContent: 'center', alignItems: 'center'}}>
          <div className='Welcome' style={{display: 'flex', flexDirection:'column',}}>
            <p style={{fontSize: '4rem', color: '#332f79'}}>Welcome to <br></br><span style={{color: '#d06c16'}}> the Spec Tech </span><br></br> 2<span style={{color: '#d06c16'}}>K</span>23</p>
            <p style={{fontSize: '1.3rem', color: '#cf6c18'}}>Get ready for a thrilling journey into the <br></br> future of technology at Spec Tech 2k23, <br></br> where innovation meets inspiration.</p>
          </div>
          <div className='LogoAnimation' style={{display: 'flex',flexDirection: 'row', justifyItems: 'flex-start'}}>
            <img  style={{ width: 'auto', height: 'auto'}} src={SpectechAnimated} alt="animated Logo" className='AnimatedLogo' />
          </div>
        </Container>
        
        <Container style={{width: '100vw', fontFamily: 'Valorant', color: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-around',alignContent: 'center', alignItems: 'center'}}>
          <div className='EventStartsText' style={{display: 'flex', flexDirection:'column',}}>
            <p style={{fontSize: '5rem', textShadow: '0 0 5px #ff0000',}}>The <span style={{color: '#d06c16'}}>Event</span> <br></br> <span style={{color: '#332f79'}}>Starts</span> In!</p>
          </div>
          <div className='CountDown' style={{display: 'flex',flexDirection: 'row', marginLeft: '20%', justifyItems: 'flex-start'}}>
            <CountDown style={{fontSize: '2rem'}} targetDate={dateTimeAfterThreeDays} />
          </div>
        </Container>

        <Container className='About' id='about' style={{ width: '100vw', fontFamily: 'Valorant', color: '#fff', display: 'flex', margin: '0 0 0 8%', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <div className='AboutUsHeading' style={{ position: 'relative', marginBottom: '8%' }}>
            <div className='AboutUsbg'>
              <p style={{ fontSize: '10em', zIndex: 'initial', opacity: '0.5', margin: '0', textShadow: '0 0 5px #ff0000', }}>About Us</p>
            </div>
          </div>
          <div className='AboutUsContant' style={{ display: 'flex', flexDirection: 'row', marginBottom: '8%'  }}>
            <div className='AboutUsText'>
              <div className='AboutusCard' sx={{ minWidth: 275, alignItems: 'center', color: '#fff'}}>
                <p className='CardText'>SPEC is a student centric, multidisciplinary, research and holistic development oriented not for profit campus with a view to promote welfare. Within a short span of time, since 2007 till date, it has emerged as a campus known for teaching, learning & activities across the state of Gujarat. The campus, spread across the sprawling lush green environment and a bit away from noise and pollution of city, has number of institutes, named after Iron man of India. All technically professional courses are affiliated with Gujarat Technological University.</p>
              </div>    
            </div>
            <div className='AboutUsVector' style={{ display: 'flex', flexDirection: 'row', marginLeft: '13%', justifyItems: 'flex-start' }}>
              <img className='AboutUsIllustration' src={AboutUsIllustration} alt='AboutUsIllustration'></img>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;

import './App.css'
import * as React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import CountDown from './Componants/CountDown';
import SpecLogoIcon from './Assets/Images/SpecLogo.png'
import SpectechAnimated from './Assets/Images/tech-fauget-unscreen.gif'
import AboutUsIllustration from './Assets/Images/aboutus-illustartion.png'
import EventCard from './Componants/EventCard.js'
import EventsPage from './pages/EventsPage.js'
import { pages } from './constants';
import ComingSoonImg from './Assets/Images/ComingSoon.jpg'

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState(''); // Initialize with the first page
  const [showEvents, setShowEvents] = useState(false); // Track whether to show the EventsPage

  const givenDateString = '2023-11-27 09:00:00'; // Replace with your desired date

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

  const handleViewMoreEventsClick = () => {
    setShowEvents(true);
  };

  return (
    <div className="App">
        <div className='mianBody'>
          <div className='navBar'>
            <AppBar position="fixed" className='AppBar'>
              <Container maxWidth="lg">
                <Toolbar disableGutters>
                  <Button variant="text" style={{ display: 'contents' }}>
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

          <Container className='home' id='home'>
            <div className='Welcome'>
              <p style={{ fontSize: '4rem', color: '#332f79' }}>Welcome to <br></br><span style={{ color: '#d06c16' }}> the Spec Tech </span><br></br> 2<span style={{ color: '#d06c16' }}>K</span>23</p>
              <p style={{ fontSize: '1.3rem', color: '#cf6c18' }}>Get ready for a thrilling journey into the <br></br> future of technology at Spec Tech 2k23, <br></br> where innovation meets inspiration.</p>
            </div>
            <div className='LogoAnimation'>
              <img src={SpectechAnimated} alt="animated Logo" className='AnimatedLogo' />
            </div>
          </Container>

          <Container className='CountDownContainer'>
            <div className='EventStartsText'>
              <p style={{ fontSize: '5rem', textShadow: '0 0 5px #ff0000', }}>The Event <br></br> Starts In!</p>
            </div>
            <div className='CountDownDiv'>
              <CountDown style={{ fontSize: '2rem' }} targetDate={givenDateString} />
            </div>
          </Container>

          <Container className='About' id='about'>
            <div className='AboutUsHeading'>
              <div className='AboutUsbg'>
                <p>About Us</p>
              </div>
            </div>
            <div className='AboutUsContant'>
              <div className='AboutUsText'>
                <div className='AboutusCard'>
                  <p className='CardText'>SPEC is a student centric, multidisciplinary, research and holistic development oriented not for profit campus with a view to promote welfare. Within a short span of time, since 2007 till date, it has emerged as a campus known for teaching, learning & activities across the state of Gujarat. The campus, spread across the sprawling lush green environment and a bit away from noise and pollution of city, has number of institutes, named after Iron man of India. All technically professional courses are affiliated with Gujarat Technological University.</p>
                </div>
              </div>
              <div className='AboutUsVector'>
                <img className='AboutUsIllustration' src={AboutUsIllustration} alt='AboutUsIllustration'></img>
              </div>
            </div>
          </Container>

          <Container className='EventsContainer' id='events'>
            <div className='EventsHeading'>
              <div className='Eventsbg'>
                <p>Events</p>
              </div>
            </div>

            <div className='EventsCardsDiv'>
              <div className='ThreeEventCards'>
                <EventCard EventImg={ComingSoonImg} EventName='Web-O-Master' EventDiscription='In this Event We will give you a figma of the webpage you have make in given time.' />
                <EventCard EventImg={ComingSoonImg} EventName='Bits & Bytes' EventDiscription='You are gonna Compete with other to build the best and fastest working PC assembling in this contest' />
                <EventCard EventImg={ComingSoonImg} EventName='Treasure Hunt' EventDiscription='Find the clues and hunt the treasure before other. The fastest Clue & Treasure Hunter get the prize.' />
              </div>
            </div>
            <div className='ViewMoreEvents mt-5'>
              <button 
                onClick={handleViewMoreEventsClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View More Events
                </span>
              </button>
            </div>
          </Container>

        </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SpecLogoIcon from "../Assets/Images/SpecLogo.png";
import { pages } from "../constants";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState(""); // Initialize with the first page

  useEffect(() => {
    if (location.pathname.includes("events")) {
      setCurrentPage("Events");
    }
    if (location.pathname.includes("home")) {
      Scrollto("home");
      setCurrentPage("Home");
    }
    if (location.pathname.includes("about")) {
      Scrollto("about");
      setCurrentPage("About");
    }
    if (location.pathname.includes("sponsors")) {
      setCurrentPage("Sponsors");
      Scrollto("sponsors");
    }
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handlePageChange = (page) => {
    if (page === "Home") {
      navigate("/home");
    } else if (page === "About") {
      navigate("/about");
    } else if (page === "Sponsors") {
      navigate("/sponsors");
    }
    setCurrentPage(page);
    handleCloseNavMenu();
  };

  const Scrollto = (page) => {
    const elementId = page.toLowerCase();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogoClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div className="navBar">
      <AppBar position="fixed" className="AppBar">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <NavLink to="/home" style={{ display: "contents" }}>
              <img
                src={SpecLogoIcon}
                alt="Spec Logo"
                className="specLogo"
                onClick={handleLogoClick} // Add the click handler here
              />
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={{
                      color: currentPage === page ? "#d06c16" : "inherit",
                      borderBottom:
                        currentPage === page ? "10px solid" : "0px solid",
                      borderBottomColor:
                        currentPage === page ? "#332f79" : "auto",
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              className="OptionBox"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page.toLowerCase()} // Use a lowercase version of the page name as the id
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed to account for your fixed navbar
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: currentPage === page ? "#d06c16" : "white",
                      borderBottom:
                        currentPage === page ? "2px solid" : "0px solid",
                      borderBottomColor:
                        currentPage === page ? "#332f79" : "auto",
                      fontFamily: "Valorant !important",
                      display: "block",
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
  );
};

export default Header;

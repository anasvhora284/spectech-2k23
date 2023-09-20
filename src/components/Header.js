import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SpecLogoIcon from "../assets/Images/SpecLogo.png";
import { pages } from "../constants";
import "../css/AppBar.css";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const drawerWidth = 240;
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState(""); // Initialize with the first page

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
    if (
      location.pathname.includes("events") &&
      (page === "Home" ||
        page === "About" ||
        page === "Sponsors" ||
        page === "Team")
    ) {
      navigate("/home");
    }
    setCurrentPage(page);
    handleCloseNavMenu();
  };

  const Scrollto = (page) => {
    const elementId = page;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(page);
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <CloseIcon sx={{ position: "absolute", top: "20px", right: "25px" }} />

      <div class="area">
        <List sx={{ paddingBlockStart: "50px" }}>
          {pages.map((item) => (
            <ListItem key={item} disablePadding>
              <Link
                key={item}
                to={item} // Use a lowercase version of the page name as the id
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText
                    sx={{
                      "& > span": {
                        color: currentPage === item ? "#d06c16" : "inherit",
                        fontSize: "20px",
                        fontFamily: "Valorant",
                        borderBottom:
                          currentPage === item ? "2px solid" : "0px solid",
                        borderBottomColor:
                          currentPage === item ? "#332f79" : "auto",
                        display: "inline",
                        paddingInline: "0px 10px",
                        paddingBottom: "2px",
                        marginInlineStart: "15px",
                        fontWeight: currentPage === item ? 600 : 400,
                      },
                    }}
                    onClick={() => {
                      handlePageChange(item);
                      setMobileOpen(false);
                    }}
                    primary={item}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div className="navBar">
      <AppBar position="fixed" className="AppBar">
        <Container maxWidth="lg">
          <Toolbar className="NavToolBarDiv" disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to="/home">
              <img
                src={SpecLogoIcon}
                alt="Spec Logo"
                className="specLogo"
                onClick={handleLogoClick} // Add the click handler here
              />
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
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
                  horizontal: "right",
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
              ></Menu>
            </Box>
            <Box
              className="OptionBox"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page} // Use a lowercase version of the page name as the id
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
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "rgb(208,108,22) linear-gradient(0deg, rgba(208,108,22,1) 0%, rgba(255,255,255,1) 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Header;

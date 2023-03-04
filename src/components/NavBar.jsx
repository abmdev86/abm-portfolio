import Proptypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import LogoIcon from "./LogoIcon";
import { Box } from "@mui/system";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";
import { ColorModeContext } from "../Themes/contexts/ColorModeContext";

const pages = ["Games", "Projects"];

export default function NavBar({ logoName, handleChangeColorMode, mode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="sticky" sx={{ bgcolor: 'background.default', color: 'inherit', }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoIcon height="50px" width="50px" xs="none" md="flex" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                ml: 1,
                mr: 2,
                fontWeight: 700,
                textDecoration: "none",
                color: "inherit",
                letterSpacing: 3,
              }}
            >
              {logoName.toUpperCase()}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-navBar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-navBar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
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
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href="#"
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LogoIcon height="50px" width="50px" xs="flex" md="none" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {logoName.toUpperCase()}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button key={index} onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit', display: 'block', }}>
                  <Typography noWrap
                    component="a"
                    href={`/${page.toLocaleLowerCase()}`}
                    sx={{
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {page}

                  </Typography>
                </Button>
              ))}
            </Box >
            <Box sx={{ flexGrow: 0 }}>
              <SocialMediaLinks />

            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <ColorModeContext.Consumer>
                {({ toggleColorMode }) => (
                  <Button variant="contained" sx={{ color: 'inherit' }} onClick={toggleColorMode}>Use {mode} Mode</Button>
                )}


              </ColorModeContext.Consumer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>

  );
}

NavBar.propTypes = {
  logoName: Proptypes.string,
  handleChangeColorMode: Proptypes.func,
  mode: Proptypes.string,
};

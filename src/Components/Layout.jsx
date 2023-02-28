

import { CssBaseline, ThemeProvider } from "@mui/material";
import { basicTheme, ColorModeContext, darkTheme, getDesignTokens } from "../Themes";
import { useState, useMemo, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import AppFooter from "./AppFooter";
import { Container } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import ToggleColorMode from "./ToggleColorMode";


export default function Layout({ children }) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);





    // Update the theme only if the mode changes
    return (

        <ToggleColorMode>


            <NavBar logoName="Auroiah" handleChangeColorMode={colorMode.toggleColorMode} mode={theme.palette.mode} />
            <Container maxWidth='md' sx={{ height: '100%', m: 'auto' }}>

                {children}
                <AppFooter />

            </Container>
        </ToggleColorMode>







    );
}

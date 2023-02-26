

import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "../Themes";
import NavBar from "./NavBar";
import AppFooter from "./AppFooter";
import { Container } from "@mui/system";

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline enableColorScheme />
            <NavBar logoName="Auroiah" />

            <Container maxWidth='md' sx={{ height: '100%', m: 'auto' }}>

                {children}
                <AppFooter />

            </Container>

        </ThemeProvider>
    );
}

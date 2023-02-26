import Grid from "@mui/material/Unstable_Grid2";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "../Themes";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "@mui/system";

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline enableColorScheme />
            <NavBar logoName="Auroiah" />

            <Container maxWidth='md' sx={{ height: '100vh', m: 'auto' }}>

                {children}
            </Container>
            <Footer />

        </ThemeProvider>
    );
}

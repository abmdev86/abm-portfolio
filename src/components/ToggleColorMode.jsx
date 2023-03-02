import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ColorModeContext } from "../Themes";


export default function ToggleColorMode({ children }) {
    const [mode, setMode] = useState(localStorage.getItem("mode") || 'light');

    const colorMode = useMemo(
        () => ({
            currentTheme: mode,
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));


            },
        }),
        [mode],
    );

    useEffect(() => {
        console.log(mode);
        localStorage.setItem('mode', mode);

    }, [mode])

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    return (
        <ColorModeContext.Provider value={colorMode}>


            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />

                {children}
            </ThemeProvider>


        </ColorModeContext.Provider>
    )
}
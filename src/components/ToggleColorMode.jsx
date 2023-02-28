import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { ColorModeContext } from "../Themes";


export default function ToggleColorMode({ children }) {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

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
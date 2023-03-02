

import { ColorModeContext } from "../Themes";
import { useContext } from "react";
import NavBar from "./NavBar";
import AppFooter from "./AppFooter";
import { Container } from "@mui/system";
import ToggleColorMode from "./ToggleColorMode";


export default function Layout({ children }) {
    const colorMode = useContext(ColorModeContext);





    // Update the theme only if the mode changes
    return (

        <ToggleColorMode>

            <ColorModeContext.Consumer>
                {

                    (({ currentTheme }) => (
                        <>
                            <NavBar logoName="Auroiah" handleChangeColorMode={colorMode.toggleColorMode} mode={currentTheme === 'light' ? 'Dark' : 'Light'} />
                            <Container maxWidth='md' sx={{ height: '100%', m: 'auto' }}>
                                {children}
                                <AppFooter />
                                {colorMode.currentTheme}
                            </Container>
                        </>

                    ))
                }



            </ColorModeContext.Consumer>

        </ToggleColorMode>







    );
}

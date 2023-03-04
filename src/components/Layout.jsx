import { ColorModeContext } from '../Themes/contexts/ColorModeContext';
import { useContext } from 'react';
import NavBar from './NavBar';
import AppFooter from './AppFooter';
import { Container } from '@mui/system';
import ToggleColorMode from './ToggleColorMode';


export default function Layout({ children }) {
    const colorMode = useContext(ColorModeContext);

    // Update the theme only if the mode changes
    return (
        <ToggleColorMode>
            <ColorModeContext.Consumer>
                {({ currentTheme }) => (
                    <>
                        <NavBar
                            logoName="Auroiah"
                            handleChangeColorMode={colorMode.toggleColorMode}
                            mode={currentTheme === 'light' ? 'Dark' : 'Light'}
                        />
                        <Container maxWidth="sm" sx={{ margin: 'auto' }}>

                            {children}


                            {colorMode.currentTheme}

                        </Container>
                        <div className='clear'></div>
                        <AppFooter />

                    </>
                )}
            </ColorModeContext.Consumer>
        </ToggleColorMode >
    );
}

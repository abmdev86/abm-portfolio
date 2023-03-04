import { palette } from '@mui/system';
import { createContext } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

import { createContext } from 'react';

const COLOR_MODE = {
  toggleColorMode: () => {},
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

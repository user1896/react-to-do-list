import { createContext, useContext } from 'react';

export const themeContext = createContext(0);

export function useThemeContext(){
	return useContext(themeContext)
}
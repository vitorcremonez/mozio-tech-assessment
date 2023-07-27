import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import light from "./light";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	return <StyledThemeProvider theme={light}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

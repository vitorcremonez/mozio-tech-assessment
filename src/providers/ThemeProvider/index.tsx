import React, { useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const themeName = "dark";
	const theme = useMemo(() => {
		return {
			light,
			dark,
		}[themeName];
	}, [themeName]);

	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

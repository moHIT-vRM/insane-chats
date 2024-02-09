import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import React, { useMemo } from "react";
import { LIGHT } from "../config";
import breakpoints from "./breakpoints";
import palette from "./palette";


const ThemeProvider = ({ children }) => {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === LIGHT;

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows?.light : shadows?.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline /> {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;

// ////////////////////////////////////////////------>
// Another Way

// import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material'
// import { overrides } from './overrides'
// import { palette } from './palette'
// import { typography } from './typography'
// import { breakpoints } from './breakpoints'
// const baseTheme = (mode: PaletteMode) => ({
// 	palette: palette(mode),
// 	typography: {
// 		fontFamily: [
// 			'Montserrat',
// 			`system-ui`,
// 			`-apple-system`,
// 			`BlinkMacSystemFont`,
// 			`'Segoe UI'`,
// 			`Helvetica`,
// 			`Arial`,
// 			`sans-serif`,
// 			`'Apple Color Emoji'`,
// 			`'Segoe UI Emoji'`,
// 			`'Segoe UI Symbol'`,
// 		].join(','),
// 	},
// 	shape: {
// 		borderRadius: 8,
// 	},
// 	breakpoints: breakpoints(),
// 	mixins: {
// 		toolbar: {
// 			minHeight: 64,
// 		},
// 	},
// })

// export const createCustomTheme = (mode: PaletteMode) => {
// 	let theme = createTheme(baseTheme(mode))

// 	theme = createTheme(theme, {
// 		components: { ...overrides(theme) },
// 		typography: { ...typography(theme) },
// 	})

// 	theme = responsiveFontSizes(theme)
// 	return theme
// }

import { DefaultTheme, ThemeProvider } from 'styled-components'
import { hsdTheme } from './hsd-theme'
import { FC, PropsWithChildren } from 'react'

export interface BiesseThemeProviderProps {
  theme?: DefaultTheme;
}

export const BiesseThemeProvider: FC<PropsWithChildren<BiesseThemeProviderProps>> = ({ theme = hsdTheme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

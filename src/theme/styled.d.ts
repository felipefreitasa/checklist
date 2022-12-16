import "styled-components"
import defaultTheme from "./defaultTheme"

declare module "styled-components" {
    type ThemeType = typeof defaultTheme

    export interface DefaultTheme extends ThemeType { }
}
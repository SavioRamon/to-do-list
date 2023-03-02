
import "styled-components";
import { ColorTypes } from "./colors";
import { ThemeTypes } from "./themes";

declare module "styled-components" {
    export interface DefaultTheme extends ColorTypes, ThemeTypes {}
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ViewStyle} from 'react-native';
import {Font} from './IFonts';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      readonly default: string;
      readonly gradient: string;
      readonly paper: string;
      readonly transparent: string;
      readonly red: string;
      readonly orange: string;
      readonly yellow: string;
      readonly shadowColor: string;
      readonly graduationLow: string;
      readonly graduationNormal: string;
      readonly graduationHighNormal: string;
      readonly graduationHigh: string;
      readonly green: string;
      readonly sleep: string;
      readonly textDark: string;
      readonly textLight: string;
      readonly textRed: string;
      readonly backgroundLightGray: string;
      readonly inputBorderLightGray: string;
      readonly activity: string;
      readonly muscle: string;
      readonly borderColor: string;
      readonly primaryDisabled: string;
      readonly halfMainDark: string;
      readonly gray: string;
      readonly disabledInputGrey: string;
      readonly mistake: string;
    }

    interface Theme {
      readonly spacing: (factor?: number) => number;
      readonly defaultShadow: () => ViewStyle;
      readonly noShadow: () => ViewStyle;
    }

    interface ThemeFonts {
      readonly ios: {
        h1: Font;
        h2: Font;
        h3: Font;
        h4: Font;
        p1: Font;
        p2: Font;
        p2Bold: Font;
        p3: Font;
      };
      readonly android: {
        h1: Font;
        h2: Font;
        h3: Font;
        h4: Font;
        p1: Font;
        p2: Font;
        p2Bold: Font;
        p3: Font;
      };
      readonly text: {
        default: Font;
        defaultBold: Font;
        smallest: Font;
        smallestBold: Font;
        textInput: Font;
        small: Font;
        smallBold: Font;
        button: Font;
        buttonBold: Font;
        buttonWhite: Font;
        large: Font;
        largestBold: Font;
        largeBold: Font;
        largest: Font;
      };
    }
  }
}

export type ITheme = ReactNativePaper.Theme;

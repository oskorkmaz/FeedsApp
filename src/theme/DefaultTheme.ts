import {DefaultTheme} from 'react-native-paper';
import {Platform} from 'react-native';
import {moderateScale} from '../utils/window-size';

export const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  spacing: (factor: number = 1) => factor * 5,
  defaultShadow: () => {
    return {
      ...Platform.select({
        android: {
          shadowColor: theme.colors.gray,
          elevation: 4,
        },
        ios: {
          shadowColor: 'rgba(45, 97, 185, 0.04)',
          shadowOffset: {
            width: 3,
            height: 4,
          },
          shadowOpacity: 1.25,
          shadowRadius: 1,
        },
      }),
    };
  },
  noShadow: () => {
    return {
      ...Platform.select({
        android: {
          shadowColor: theme.colors.paper,
          elevation: 0,
        },
        ios: {
          shadowColor: 'rgba(45, 97, 185, 0.04)',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
      }),
    };
  },
  mode: 'adaptive',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    default: '#000000',
    text: 'rgba(35, 47, 72, 1)',
    primary: '#4EAFCD',
    transparent: '#00000000',
    primaryDisabled: 'rgba(78, 175, 205, 0.1)',
    gradient: '#9B51E0',
    red: '#EE3F6C',
    orange: '#F89C8F',
    yellow: '#FFE600',
    textLight: '#9CA3AF',
    textDark: 'rgba(38, 40, 60, 1)',
    textRed: 'rgba(238, 63, 108, 1)',
    green: '#9FDC61',
    graduationLow: '#4690BA',
    graduationNormal: '#46BA82',
    backgroundLightGray: 'rgba(247, 249, 253, 1)',
    inputBorderLightGray: 'rgba(0, 0, 0, 0.1)',
    graduationHighNormal: '#EEA34D',
    graduationHigh: '#EE3F6C',
    halfMainDark: 'rgba(34, 51, 84, 0.5)',
    shadowColor: 'rgba(45, 97, 185, 0.04)',
    accent: '#FD5B71',
    paper: '#FFFFFF',
    backdrop: 'rgba(115,111,111, 0.6)',
    disabled: 'rgba(119, 161, 243, 0.1)',
    placeholder: '#F6F6F6',
    sleep: '#6ABAE6',
    activity: '#79DBA2',
    error: '#FF0000',
    muscle: '#717171',
    borderColor: 'rgba(0, 0, 0,0.2)',
    gray: '#F3F4F6',
    disabledInputGrey: '#F9F9F9',
    mistake: '#EE3F6C',
  },
  fonts: {
    ...DefaultTheme.fonts,
    ios: {
      h1: {
        fontSize: moderateScale(40),
        lineHeight: moderateScale(60),
        fontWeight: '500',
      },
      h2: {
        fontSize: moderateScale(22),
        lineHeight: moderateScale(32),
        fontWeight: '500',
      },
      h3: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(26),
        fontWeight: '500',
      },
      h4: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(20),
        fontWeight: '500',
      },
      p1: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        fontWeight: '400',
      },
      p2: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: '300',
      },
      p2Bold: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: '300',
      },
      p3: {
        fontSize: moderateScale(8),
        lineHeight: moderateScale(14),
        fontWeight: '300',
      },
    },
    android: {
      h1: {
        fontSize: moderateScale(40),
        lineHeight: moderateScale(60),
        fontWeight: '500',
      },
      h2: {
        fontSize: moderateScale(22),
        lineHeight: moderateScale(32),
        fontWeight: '500',
      },
      h3: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(26),
        fontWeight: '500',
      },
      h4: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(20),
        fontWeight: '500',
      },
      p1: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(24),
        fontWeight: '400',
      },
      p2: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: '300',
      },
      p2Bold: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: '300',
      },
      p3: {
        fontSize: moderateScale(8),
        lineHeight: moderateScale(14),
        fontWeight: '300',
      },
    },
    text: {
      smallestBold: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
      },
      smallest: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      textInput: {
        fontSize: 16,
        fontWeight: '600',
        color: '#848484',
      },
      small: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      smallBold: {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 16,
        fontWeight: 'bold',
      },
      large: {
        fontSize: 20,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      largeBold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
      },
      largest: {
        fontSize: 26,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      largestBold: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
      },
      button: {
        fontSize: 20,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      buttonBold: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(0,0,0,0.75)',
      },
      buttonWhite: {
        fontSize: 20,
        fontWeight: '400',
        color: 'rgba(255,255,255,0.75)',
      },
      default: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.75)',
      },
      defaultBold: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
      },
    },
  },
};

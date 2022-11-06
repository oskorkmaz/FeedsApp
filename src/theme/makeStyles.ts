/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useMemo} from 'react';
import {useTheme} from 'react-native-paper';
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ITheme} from './react-native-paper';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export function makeStyles<
  T extends NamedStyles<T> | NamedStyles<any>,
  TProps = unknown,
>(
  styleArgs:
    | T
    | NamedStyles<T>
    | ((props: TProps, theme: ITheme) => T | NamedStyles<T>),
) {
  return function useStyles(props?: any): T {
    const theme = useTheme();

    let styles: any = null;

    if (typeof styleArgs === 'function') {
      styles = styleArgs(props, theme);
    } else {
      styles = styleArgs as T | NamedStyles<T>;
    }

    return useMemo(() => StyleSheet.create(styles), [styles]);
  };
}

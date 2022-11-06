import * as React from 'react';
import {ViewStyle, Platform, TextStyle, View} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {theme} from '../theme/DefaultTheme';
import {makeStyles} from '../theme/makeStyles';

type HeaderStyles = {
  root: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  flex: ViewStyle;
  rigtIcon: ViewStyle;
};

export interface IHeaderProps {
  readonly leftIconPressed?: () => void;
  readonly title: string;
  readonly rightIcon?: string;
  readonly leftIcon?: string;
  readonly rightIconPressed?: () => void;
  readonly rightAvatarPressed?: () => void;
  readonly leftText?: string;
  readonly rightText?: string;
  readonly subtitle?: string;
}

export const Header: React.FC<IHeaderProps> = props => {
  const classes = useStyles(props);

  return (
    <Appbar.Header style={classes.root}>
      {props.leftIcon && props.leftIconPressed ? (
        <Appbar.Action
          icon={props.leftIcon}
          onPress={props.leftIconPressed}
          size={30}
        />
      ) : (
        //@ts-ignore
        <IconButton size={24} />
      )}
      <Appbar.Content
        style={classes.titleContainer}
        title={props.title}
        subtitle={props.subtitle}
        subtitleStyle={classes.subtitle}
        titleStyle={classes.title}
      />
      {props.rightIcon ? (
        <View style={classes.rigtIcon}>
          <EntypoIcon size={24} name={'sound-mix'} />
        </View>
      ) : (
        //@ts-ignore
        <EntypoIcon size={24} name={'sound-mix'} />
      )}
    </Appbar.Header>
  );
};

const useStyles = makeStyles<HeaderStyles, IHeaderProps>(_props => ({
  root: {
    borderBottomWidth: 1,
    height: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: theme.colors.paper,
    borderBottomColor: theme.colors.borderColor,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  title: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.h2,
      },
      android: {
        ...theme.fonts.android.h2,
      },
    }),
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
  },
  rigtIcon: {
    paddingRight: '5%',
  },
  subtitle: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.p1,
      },
      android: {
        ...theme.fonts.android.p1,
      },
    }),
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
}));

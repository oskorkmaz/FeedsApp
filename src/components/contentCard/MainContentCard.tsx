import React from 'react';
import {
  Dimensions,
  Image,
  ImageStyle,
  Platform,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {theme} from '../../theme/DefaultTheme';
import {makeStyles} from '../../theme/makeStyles';
import {moderateScale} from '../../utils/window-size';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Feed} from '../../utils/types';
import Tags from './Tags';
import ContentComponent from './Content';
interface MainContentCardProps {
  readonly feedData: Feed;
}
type MainContentCardStyle = {
  main: ViewStyle;
  userBox: ViewStyle;
  avatar: ImageStyle;
  userNameText: TextStyle;
  userTextBox: ViewStyle;
  userSubtitleText: TextStyle;
  metaDate: TextStyle;
  userAlign: ViewStyle;
  mainTextBox: ViewStyle;
  mainText: TextStyle;
};
const {width} = Dimensions.get('window');
const MainContentCard: React.FC<MainContentCardProps> = ({feedData}) => {
  var classes = useStyles();
  return (
    <View style={classes.main}>
      {/* User */}
      <View style={classes.userBox}>
        <View style={classes.userAlign}>
          <Image
            style={classes.avatar}
            source={{
              uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
            }}
          />
          <View style={classes.userTextBox}>
            <View>
              <Text style={classes.userNameText}>{feedData.user.name}</Text>
              <Text style={classes.userSubtitleText}>{feedData.user.desc}</Text>
            </View>
            <Text style={classes.metaDate}>{feedData.meta.createdTime}</Text>
          </View>
        </View>
        <EntypoIcon name="dots-three-horizontal" size={20} />
      </View>
      {/* Text */}
      <View style={classes.mainTextBox}>
        <Text style={classes.mainText}>{feedData.mainText}</Text>
      </View>
      {/* Content */}
      <ContentComponent contents={feedData.content} />
      {/* Tags */}
      <Tags tagsList={feedData.tags} />
    </View>
  );
};

export default MainContentCard;
const useStyles = makeStyles<MainContentCardStyle, MainContentCardProps>(
  _props => ({
    main: {
      width: width,
      backgroundColor: theme.colors.paper,
      padding: moderateScale(15),
      borderColor: theme.colors.borderColor,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginVertical: 12,
    },
    userBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    avatar: {
      resizeMode: 'contain',
      width: moderateScale(42),
      height: moderateScale(42),
      borderRadius: moderateScale(21),
      marginRight: moderateScale(10),
    },
    userNameText: {
      ...Platform.select({
        ios: {
          ...theme.fonts.ios.h3,
        },
        android: {
          ...theme.fonts.android.h3,
        },
      }),
      color: theme.colors.text,
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 21,
    },
    userTextBox: {
      flexDirection: 'row',
    },
    userSubtitleText: {
      ...Platform.select({
        ios: {
          ...theme.fonts.ios.p1,
        },
        android: {
          ...theme.fonts.android.p1,
        },
      }),
      color: theme.colors.text,
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '400',
    },
    metaDate: {
      ...Platform.select({
        ios: {
          ...theme.fonts.ios.p3,
        },
        android: {
          ...theme.fonts.android.p3,
        },
      }),
      color: theme.colors.textLight,
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '600',
      marginLeft: moderateScale(5),
    },
    userAlign: {flexDirection: 'row'},
    mainTextBox: {
      marginVertical: moderateScale(5),
    },
    mainText: {
      ...Platform.select({
        ios: {
          ...theme.fonts.ios.p1,
        },
        android: {
          ...theme.fonts.android.p1,
        },
      }),
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
  }),
);

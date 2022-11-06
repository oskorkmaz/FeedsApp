import React, {useEffect, useState} from 'react';
import {
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
import {Content} from '../../utils/types';
type ContentStyle = {
  contentCard: ViewStyle;
  imageContent: ImageStyle;
  contentSubtitle: TextStyle;
  contentTitle: TextStyle;
  contentTypeTextBox: ViewStyle;
};
interface ContentProps {
  readonly contents: Content;
}
const ContentComponent: React.FC<ContentProps> = ({contents}) => {
  var classes = useStyles();
  const [contentFrom, setContentFrom] = useState({from: '', type: ''});
  const [viaColor, setViaColor] = useState('');
  useEffect(() => {
    if (contents.via && contents.fileType) {
      setContentFrom({
        from: String(contents.via),
        type: String(contents.fileType),
      });
    }
    switch (contents.fileType) {
      case 'article':
        setViaColor('blue');
        break;
      case 'video':
        setViaColor('red');
        break;
      case 'podcast':
        setViaColor('green');
        break;
      default:
        break;
    }
  }, []);
  return (
    <View style={classes.contentCard}>
      <Image
        style={classes.imageContent}
        source={{
          uri: String(contents.image),
        }}
      />
      <View style={classes.contentTypeTextBox}>
        <Text style={classes.contentSubtitle}>
          This {contentFrom.type} is shared via
        </Text>
        <Text
          style={[classes.contentSubtitle, {color: viaColor, marginLeft: -5}]}>
          {contentFrom.from !== undefined ? contentFrom.from : ''}
        </Text>
      </View>

      <Text style={classes.contentTitle}>{contents.title}</Text>
    </View>
  );
};

export default ContentComponent;
const useStyles = makeStyles<ContentStyle, ContentProps>(_props => ({
  contentCard: {
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
  },
  imageContent: {
    width: '100%',
    height: 194,
    resizeMode: 'cover',
  },
  contentTitle: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.p1,
      },
      android: {
        ...theme.fonts.android.p1,
      },
    }),
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  contentSubtitle: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.p1,
      },
      android: {
        ...theme.fonts.android.p1,
      },
    }),
    color: theme.colors.textLight,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    margin: 10,
  },
  contentTypeTextBox: {
    flexDirection: 'row',
  },
}));

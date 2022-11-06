import React from 'react';
import {Platform, Text, TextStyle, View, ViewStyle} from 'react-native';
import {theme} from '../../theme/DefaultTheme';
import {makeStyles} from '../../theme/makeStyles';
import {moderateScale} from '../../utils/window-size';
type TagsStyle = {
  tagContainer: ViewStyle;
  tag: ViewStyle;
  tagText: TextStyle;
};
interface TagsProps {
  readonly tagsList: String[];
}
const Tags: React.FC<TagsProps> = ({tagsList}) => {
  var classes = useStyles();
  return (
    <View style={classes.tagContainer}>
      {tagsList.map((row, i) => {
        return (
          <View style={classes.tag} key={i}>
            <Text style={classes.tagText}>{row}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Tags;
const useStyles = makeStyles<TagsStyle, TagsProps>(_props => ({
  tagContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    width: moderateScale(114),
    height: moderateScale(40),
    backgroundColor: theme.colors.gray,
    borderRadius: 47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  tagText: {
    ...Platform.select({
      ios: {
        ...theme.fonts.ios.p1,
      },
      android: {
        ...theme.fonts.android.p1,
      },
    }),
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
    margin: 10,
  },
}));

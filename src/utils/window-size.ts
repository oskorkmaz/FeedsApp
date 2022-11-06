import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const isSmallDevice = (): boolean => {
  return Dimensions.get('window').height < 700;
};

export const isSmallestDevice = (): boolean => {
  return Dimensions.get('window').height < 600;
};

const scale = (size: number): number => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};

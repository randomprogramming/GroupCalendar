import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {palette} from '../../theme';

const Typography = ({
  // default font weight is 500 and light font color
  fontWeight = 500,
  darkText = false,
  fontSize,
  variant,
  onPress,
  children,
  color,
}) => {
  const getTextStyle = () => {
    const tmpStyle = [];

    if (darkText) {
      tmpStyle.push(styles.darkText);
    } else {
      tmpStyle.push(styles.lightText);
    }

    // If one of the pre-defined variants are selected, create a style according to that
    if (variant) {
      switch (variant) {
        case 'h1':
          tmpStyle.push(styles.bold);
          tmpStyle.push(styles.h1);
          break;
        case 'h2':
          tmpStyle.push(styles.bold);
          tmpStyle.push(styles.h2);
          break;
        case 'h3':
          tmpStyle.push(styles.semiBold);
          tmpStyle.push(styles.h3);
          break;
        case 'h4':
          tmpStyle.push(styles.semiBold);
          tmpStyle.push(styles.h4);
          break;
        case 'accent':
          tmpStyle.push(styles.accent);
          tmpStyle.push(styles.medium);
          break;
        case 'title':
          tmpStyle.push(styles.semiBold);
          tmpStyle.push(styles.title);
          break;
        default:
          tmpStyle.push(styles.medium);
      }

      return tmpStyle;
    } else {
      // If variant is not selected, we can change size of text
      if (fontSize) {
        tmpStyle.push({fontSize});
      }
    }

    // If the pre-defined variant isn't selected, create a text based off the props
    if (typeof fontWeight !== 'number') {
      tmpStyle.push(styles.regular);
    } else if (fontWeight > 0 && fontWeight <= 400) {
      tmpStyle.push(styles.regular);
    } else if (fontWeight > 400 && fontWeight <= 500) {
      tmpStyle.push(styles.medium);
    } else if (fontWeight > 500 && fontWeight <= 600) {
      tmpStyle.push(styles.semiBold);
    } else if (fontWeight > 600) {
      tmpStyle.push(styles.bold);
    } else {
      tmpStyle.push(styles.regular);
    }

    if (darkText) {
      tmpStyle.push(styles.darkText);
    } else {
      tmpStyle.push(styles.lightText);
    }

    if (color) {
      tmpStyle.push({color});
    }

    return tmpStyle;
  };

  return (
    <Text style={getTextStyle()} onPress={onPress}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  lightText: {
    color: palette.white,
  },
  darkText: {
    color: palette.backgroundDark,
  },
  accent: {color: palette.accent},
  regular: {
    // 0 <= x <= 400
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    // 400 < x <= 500
    fontFamily: 'Poppins-Medium',
  },
  semiBold: {
    // 500 < x <= 600
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    // 600 < x
    fontFamily: 'Poppins-Bold',
  },
  h1: {
    fontSize: 34,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 20,
  },
  title: {
    fontSize: 17,
  },
});

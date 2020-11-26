import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Typography from './Typography';

const Link = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography variant="accent">{children}</Typography>
    </TouchableOpacity>
  );
};

export default Link;

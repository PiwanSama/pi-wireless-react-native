import React from 'react';
import { Icon } from 'expo';
import { Avatar } from 'react-native-elements'; 

import Colors from '../constants/Colors';

export default class UserAvatar extends React.Component {
  render() {
    return (
      <Avatar
          size="small"
          rounded
          title="PS"
          activeOpacity={0.7}
       />
    );
  }
}
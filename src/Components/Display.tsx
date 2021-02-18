import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface DisplayProps {}

const Display: FC<DisplayProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Display Data Here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Display;

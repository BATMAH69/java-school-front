import React from 'react';
import { View, Text } from 'react-native'


const styles = {
  loading: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Loader = () => (
  <View style={styles.loading}>
    <Text>Loading...</Text>
  </View>
);

export default Loader;
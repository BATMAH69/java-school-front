/** Created by batmah on 19.10.16 */
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, Text, TextInput } from 'react-native'


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
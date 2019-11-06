import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Other extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ik</Text>
      </View>
    );
  }
}
export default Other;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
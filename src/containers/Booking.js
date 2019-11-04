import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Booking extends Component {
  render() {
    return (
<View style={styles.container}>
        <Text>Booking</Text>
      </View>
    );
  }
}
export default Booking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
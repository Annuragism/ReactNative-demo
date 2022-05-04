import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    color: "black",
    fontSize: 24,
  },
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
const Task = () => {
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
export default Task;

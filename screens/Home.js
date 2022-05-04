import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={styles.profileText}>Back</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {},
});

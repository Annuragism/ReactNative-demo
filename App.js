import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MainComponent from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainComponent></MainComponent>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#000",
  },
  imgLogo: {
    height: 140,
    width: 140,
    // backgroundColor: "#DDDDDD",
    position: "absolute",
    top: "15%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  container1: {
    color: "#fff",
    justifyContent: "center",
    top: Dimensions.get("window").height / 2.5,
  },
  dividerLineOnTop: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: 30,
    // marginTop: 30,
  },
  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    width: 200,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  profileContainer: {
    height: 30,
    width: 60,
    // backgroundColor: "#DDDDDD",
    position: "absolute",
    bottom: 10,
    right: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#FFF",
  },
});

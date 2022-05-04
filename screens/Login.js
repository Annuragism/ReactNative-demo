import React, { useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacityBase,
  TouchableOpacity,
  Image,
  RefreshControl,
  AsyncStorage,
  Link,
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET, POST } from "../controller/transporter";
import constant from "../constant";
import Home from "../screens/Home";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogin = async (email, password) => {
    if (!email && !password) {
      alert(`Please enter email and password`);
    } else if (email == null) {
      alert(`Please enter valid email/username`);
    } else if (password == null) {
      alert(`Please enter valid password`);
    }
    console.log(constant.APIEnpoint.login);
    let reqPayload = {
      user_name: email,
      password: password,
    };

    let data = await POST(constant.APIEnpoint.login, reqPayload);
    console.log("data", data);
    if (data.status) {
      navigation.navigate("home");
      // await AsyncStorage.setItem("userdata", JSON.stringify(data.response));
      // await AsyncStorage.setItem("token", data.token);
    } else {
      alert(data.response.data.message);
    }
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <RefreshControl />
      <View style={styles.container}>
        <View style={styles.dividerLineOnTop}></View>
        <TouchableOpacity style={styles.imgLogo}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://b24sevendashboard-82797-ruby.b82797.prod.eastus.az.svc.builder.ai//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6974c2a3a14588f63c85eee6ed389345e948f77b/24Seven_logo.jpg",
            }}
          />
        </TouchableOpacity>
        <View style={styles.container1}>
          <View style={styles.inputView}>
            <TextInput
              onChangeText={(e) => {
                setEmail(e);
              }}
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              onChangeText={(e) => {
                setPassword(e);
              }}
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.inputView}
              onPress={async () => {
                submitLogin(email, password);
              }}
            >
              <Text>Log in</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.needAccountText}>
            Need an account?{" "}
            <Text
              style={styles.signUPText}
              onPress={() => {
                navigation.navigate("signup");
              }}
            >
              Sign up.
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
    height: 2,
    marginTop: 30,
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
  needAccountText: {
    color: "#FFF",
  },
  signUPText: {
    color: "#0077cc",
  },
});

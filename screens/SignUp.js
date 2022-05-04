import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
const Form = styled.View`
  padding: 10px;
`;
const StyledInput = styled.TextInput`
  border: 1px solid gray;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 25px;
`;
const FormLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
const FormBtn = styled.TouchableOpacity`
  background: #0077cc;
  width: 100%;
  padding: 8px;
`;
const BtnText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
const signUp = styled.TouchableOpacity`
  margin-top: 20px;
`;
const Link = styled.Text`
  color: #0077cc;
  font-weight: bold;
`;
const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const handleSubmit = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Form>
        <FormLabel style={styles.label}>Email</FormLabel>
        <TextInput
          style={styles.textField}
          onChangeText={(text) => setEmail(text)}
          value={email}
          textContentType="emailAddress"
          autoCompleteType="email"
          autoFocus={true}
          autoCapitalize="none"
          placeholderTextColor="#fff"
        />
        <FormLabel style={styles.label}>Password</FormLabel>
        <TextInput
          style={styles.textField}
          onChangeText={(text) => setPassword(text)}
          value={password}
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
        <FormBtn onPress={handleSubmit}>
          <BtnText>Submit</BtnText>
        </FormBtn>

        {/* {props.formType !== "signUp" && (
        <SignUp onPress={() => props.navigation.navigate("SignUp")}>
          <Text>
            Need an account? <Link>Sign up.</Link>
          </Text>
        </SignUp>
      )} */}
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  label: {
    color: "#FFF",
  },
  textField: {
    // border: "1px solid gray",
    fontSize: 18,
    padding: 8,
    marginBottom: 25,
  },
});

export default SignUp;

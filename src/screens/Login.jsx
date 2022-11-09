import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../lib/styles";
import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export const LoginEmanu = () => {
  const [text, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ ...styles.container, ...stylesEspec.container }}>
      <TextInput
        label="email"
        mode="outlined"
        value={text}
        onChangeText={(emailDigitado) => setEmail(emailDigitado)}
      />

      <TextInput
        style={styles.input}
        label="senha"
        mode="outlined"
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <BotaoMaravilhosoDaManu />
    </View>
  );
};

const stylesEspec = StyleSheet.create({
  container: {
    backgroundColor: "navajowhite",
    width: "100%",
    height: "100vh",
  },
});
const BotaoMaravilhosoDaManu = () => (
  <Button icon="heart" mode="contained" onPress={() => console.log("Pressed")}>
    botao
  </Button>
);

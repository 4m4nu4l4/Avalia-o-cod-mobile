import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

export const SobreManu = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../img/meufundo.jpeg')} style={styles.imageBackground}>
      <Image source={require('../img/imagemzinha.jpeg')} style={styles.imageForeground} />
      <Text style={styles.text}>Bem vindos ao nosso app</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
  text: {
    color: "white",
    fontSize: 42,
    textAlign: "center"
  }
});


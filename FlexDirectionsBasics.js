import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

function FlexDirectionBasics() {
  const onPress = () => alert("You tapped the button!");
  return (
    // Try setting `flexDirection` to `column`.
    <View style={styles.page}>
      <View style={styles.container}>
        <Image style={styles.square} source={require("./mylogo.png")} />
        <View style={[styles.square, { backgroundColor: "orange" }]} />
        <View style={[styles.square, { backgroundColor: "yellow" }]} />
        <View style={[styles.square, { backgroundColor: "green" }]} />
        <View style={[styles.square, { backgroundColor: "blue" }]} />
        <View style={[styles.square, { backgroundColor: "orange" }]} />
        <View style={[styles.square, { backgroundColor: "yellow" }]} />
        <View style={[styles.square, { backgroundColor: "green" }]} />
        <View style={[styles.square, { backgroundColor: "blue" }]} />
        <View style={[styles.square, { backgroundColor: "orange" }]} />
        <View>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "white",
  },
  container: {
    flex: 1,

    backgroundColor: "aliceblue",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "flex-start",
  },
  square: {
    height: 50,
    width: 50,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    backgroundColor: "#2196F3",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",

    color: "white",
  },
});

export default FlexDirectionBasics;

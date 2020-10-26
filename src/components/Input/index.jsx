import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const Input = ({ label, name, ...rest }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

export default Input;

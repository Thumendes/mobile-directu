import React, { useState } from "react";
import { Text, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Input from "../Input";
import styles from "./styles";

const Question = ({ data, setFormValue, index }) => {
  const handleChangeValue = (value) => {
    setFormValue(index, value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      {data.options ? (
        <View>
          <RadioForm
            onPress={handleChangeValue}
            selectedButtonColor={"#40e0d0"}
            buttonColor={"#40e0d0"}
            buttonSize={15}
            labelColor={`#fff`}
            selectedLabelColor={`#fff`}
            radio_props={data.options.map((option) => ({
              label: option.name,
              value: option.name,
            }))}
          />
        </View>
      ) : (
        <View>
          <Input
            style={styles.input}
            placeholder="Resposta"
            onChangeText={handleChangeValue}
          />
        </View>
      )}
    </View>
  );
};

export default Question;

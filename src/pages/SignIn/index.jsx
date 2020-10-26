import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Text, Pressable, View, Alert } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";
import api from "../../services/api";
import * as SecureStore from "expo-secure-store";

const SignIn = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const { data: response } = await api.post("/authclient", data);

    if (response.error) {
      Alert.alert("😯 Opss..", response.error);
      return;
    }

    await SecureStore.setItemAsync("token", response.token);
    navigation.navigate("home");
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <Input
            label="Email"
            onChangeText={(text) => setData({ ...data, email: text })}
          />
          <Input
            secureTextEntry
            label="Senha"
            onChangeText={(text) => setData({ ...data, password: text })}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={{ fontSize: 15 }}>Entrar</Text>
          </Pressable>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("signup")}
          >
            Não tem conta?
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default SignIn;

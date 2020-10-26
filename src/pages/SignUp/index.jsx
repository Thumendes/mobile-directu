import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Text, Pressable, View, Alert } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";
import api from "../../services/api";

const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await api.post("/client", data);

      Alert.alert("😀 Sucesso", "Bem-vindo à Directu");
      navigation.navigate("signin");
    } catch (error) {
      Alert.alert("😯 Erro", "Tente novamente");
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
          <Input
            label="Nome"
            onChangeText={(text) => setData({ ...data, name: text })}
          />
          <Input
            label="CPF"
            onChangeText={(text) => setData({ ...data, cpf: text })}
          />
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
            <Text style={{ fontSize: 15 }}>Cadastrar</Text>
          </Pressable>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("signin")}
          >
            Já tem conta?
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default SignUp;

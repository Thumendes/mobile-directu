import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { View, Text, Pressable, Alert } from "react-native";
import Layout from "../../components/Layout";
import { FlatList } from "react-native";
import styles from "./styles";
import Question from "../../components/Question";
import * as SecureStore from "expo-secure-store";

const FormPage = ({ route, navigation }) => {
  const [form, setForm] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`form/${route.params.id}`);
      setForm(data);
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      const { data } = await api.post("answer", {
        clientId: await SecureStore.getItemAsync("token"),
        formId: form._id,
        questions: answers.map((answer, index) => ({
          name: form.questions[index].name,
          value: answer,
        })),
      });
      Alert.alert(
        "Obrigado por responder!",
        `Acaba de ganhar R$${form.discount} de Benefícios!`
      );
      navigation.navigate("home");
    } catch (error) {}
  };

  const handleChangeFormValue = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;

    setAnswers(newAnswers);
  };

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>{form.name}</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={form.questions}
          renderItem={({ item, index }) => (
            <Question
              data={item}
              index={index}
              setFormValue={handleChangeFormValue}
            />
          )}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 15 }}>Enviar</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export default FormPage;

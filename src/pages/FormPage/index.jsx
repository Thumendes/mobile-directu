import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { View, Text, Alert } from "react-native";
import Layout from "../../components/Layout";
import { FlatList } from "react-native";
import styles from "./styles";

const FormPage = ({ route, navigation }) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    (async () => {
      Alert.alert("id", route.id);
      const { data } = await api.get(`form/${forms}`);
      setForms(data);
    })();
  }, []);

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Formulário</Text>
      </View>
    </Layout>
  );
};

export default FormPage;

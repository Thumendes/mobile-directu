import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { View, Text } from "react-native";
import Layout from "../../components/Layout";
import { FlatList } from "react-native";
import Form from "../../components/Form";
import styles from "./styles";
import * as SecureStore from "expo-secure-store";

const Home = ({ navigation }) => {
  const [forms, setForms] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    (async () => {
      const id = await SecureStore.getItemAsync("token");
      const { data: formsData } = await api.get(`form?clientId=${id}`);
      const { data: clientData } = await api.get(`client/${id}`);
      setForms(formsData);
      setClient(clientData);
    })();
  }, []);

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.subTitle}>Benefícios Acumulados</Text>
        <View style={styles.discounts}>
          <Text style={styles.number}>
            R$
            {JSON.stringify(client.client.wallet, null, 2)}.00
          </Text>
        </View>
        <Text style={styles.subTitle}>Formulários</Text>
        <FlatList
          style={styles.list}
          data={forms}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Form
              data={item}
              openForm={() => navigation.navigate("form", { id: item._id })}
            />
          )}
        />
      </View>
    </Layout>
  );
};

export default Home;

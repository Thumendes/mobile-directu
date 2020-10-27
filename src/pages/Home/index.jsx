import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { View, Text } from "react-native";
import Layout from "../../components/Layout";
import { FlatList } from "react-native";
import Form from "../../components/Form";
import styles from "./styles";

const Home = ({ navigation }) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("form");
      setForms(data);
    })();
  }, []);

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.container}>
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

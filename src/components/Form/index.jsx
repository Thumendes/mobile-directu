import React, { useEffect, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import api from "../../services/api";
import styles from "./styles";

const Form = ({ data, navigation }) => {
  const [store, setStore] = useState({});

  const currencyFormat = (num) => {
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  useEffect(() => {
    (async () => {
      const { data: response } = await api.get(`store/${data.storeId}`);

      setStore(response);
    })();
  }, []);

  const handleOpenForm = () => {
    Alert.alert("Abrir Formulário", data.name, [
      {
        text: "Abrir",
        onPress: () => navigation.navigate("form", { id: data._id }),
      },
    ]);
  };

  return (
    <TouchableHighlight style={styles.container} onPress={handleOpenForm}>
      <>
        <Image source={store.imageURL} />
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.title}>{store.name}</Text>
        </View>
        <Text style={styles.discount}>{currencyFormat(data.discount)}</Text>
      </>
    </TouchableHighlight>
  );
};

export default Form;

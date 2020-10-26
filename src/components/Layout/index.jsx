import React from "react";
import { SafeAreaView, Image } from "react-native";
import logo from "../../../assets/logo.png";
import styles from "./styles";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

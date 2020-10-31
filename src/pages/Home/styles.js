import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#40e0d0",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  form: {
    flexDirection: "column",
    marginTop: 50,
  },
  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
  },
  subTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },
  header: {
    marginBottom: 30,
  },
  discounts: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#555",
    marginBottom: 30,
  },
  number: {
    marginLeft: 20,
    color: "#fff",
    fontWeight: "600",
    fontSize: 40,
  },
});

export default styles;

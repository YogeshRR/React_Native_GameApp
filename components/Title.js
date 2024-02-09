import { Children } from "react";
import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e9da12",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#e9da12",
    padding: 15,
  },
});

import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";
function InstructionText({ children }) {
  return <Text style={styles.instrunctionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instrunctionText: {
    color: Colors.accentColor,
    fontWeight: "bold",
    fontSize: "24",
  },
});

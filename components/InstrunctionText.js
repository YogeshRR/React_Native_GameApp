import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";
function InstructionText({ children, style }) {
  return <Text style={[styles.instrunctionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instrunctionText: {
    fontFamily: "open-sans-bold",
    color: Colors.accentColor,
    fontSize: "24",
  },
});

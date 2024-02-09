import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.textInputContainer}>
      <TextInput style={styles.textInput} maxLength={2} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  textInput: {
    height: 50,
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    width: 50,
    color: "yellow",
    textAlign: "center",
  },
});

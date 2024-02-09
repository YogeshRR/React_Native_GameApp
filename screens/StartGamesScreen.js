import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
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
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

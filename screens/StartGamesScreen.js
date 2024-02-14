import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/UI/PrimaryButton.js";
import Colors from "../constants/colors.js";
import Title from "../components/UI/Title.js";
import Card from "../components/UI/Card.js";
import InstructionText from "../components/InstrunctionText.js";

function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height, weight } = useWindowDimensions();
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHander() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enteredNumber);

    if (isNaN(enteredNumber) || chooseNumber < 0 || chooseNumber >= 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a Number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHander }]
      );
    }
    onConfirmNumber(chooseNumber);
  }

  const marginTop = height < 380 ? 35 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTop }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter the Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHander}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 380 ? 35 : 100,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    width: 50,
    color: Colors.accentColor,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

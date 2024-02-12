import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumbersContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;

  if (rnNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rnNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOvered }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOvered();
    }
  }, [currentGuess, userNumber, onGameOvered]);

  function guessNumber(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Error", "Don't be lie!!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess;
    }
    console.log("I am clicked");
    console.log(minBoundry, maxBoundry);
    let rndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(rndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess} </NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={guessNumber.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={guessNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

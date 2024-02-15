import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumbersContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/InstrunctionText";
import GuessNumberList from "../components/game/GuessNumberList";

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
  const [guessRoundNumber, setGuessRoundNumber] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOvered(guessRoundNumber.length);
    }
  }, [currentGuess, userNumber, onGameOvered]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

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
    setGuessRoundNumber((prevGuessRounds) => [rndNumber, ...prevGuessRounds]);
  }
  const guessRoundListLength = guessRoundNumber.length;
  let content = (
    <>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card>
        <InstructionText style={styles.instrunctionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.landScapeView}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess} </NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRoundNumber.map((guessRound) => (
          <Text>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRoundNumber}
          renderItem={(itemData) => (
            <GuessNumberList
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instrunctionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  landScapeView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

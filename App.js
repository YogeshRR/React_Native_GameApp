import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGamesScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber, setUserNumer] = useState();
  const [gameIsOver, setGameIsOvered] = useState(true);
  function startGameHandler(pickedNumber) {
    setUserNumer(pickedNumber);
    setGameIsOvered(false);
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

  function gameIsOvered() {
    setGameIsOvered(true);
  }

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOvered={gameIsOvered} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accentColor]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundStyleImage}
      >
        <SafeAreaProvider style={styles.rootScreen}>{screen}</SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundStyleImage: {
    opacity: 0.15,
  },
});

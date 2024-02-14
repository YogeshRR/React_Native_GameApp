import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGamesScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber, setUserNumer] = useState();
  const [gameIsOver, setGameIsOvered] = useState(true);
  const [gameRounds, setGameRounds] = useState();

  const [fontLoaded] = useFonts({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function startGameHandler(pickedNumber) {
    setUserNumer(pickedNumber);
    setGameIsOvered(false);
  }

  if (!fontLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

  function gameIsOvered(guessRound) {
    setGameIsOvered(true);
    setGameRounds(guessRound);
  }

  function restartNewGame() {
    setUserNumer(null);
    setGameRounds(0);
  }

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOvered={gameIsOvered} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        userRound={gameRounds}
        onStrtNewGame={restartNewGame}
      />
    );
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

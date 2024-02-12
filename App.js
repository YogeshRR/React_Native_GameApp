import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGamesScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
export default function App() {
  const [userNumber, setUserNumer] = useState();
  function startGameHandler(pickedNumber) {
    setUserNumer(pickedNumber);
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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

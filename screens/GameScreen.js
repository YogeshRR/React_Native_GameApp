import { Text, View, StyleSheet, SafeAreaView } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>

      <View></View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 124,
  },
});

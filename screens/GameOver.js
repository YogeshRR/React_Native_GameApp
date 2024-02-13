import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
function GameOver() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <View>
        <Text>
          {" "}
          Your Phone need <Text>X</Text> rounds to guess the number{" "}
          <Text>Y.</Text>
        </Text>
      </View>
    </View>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 30,
    alignItems: "center",
  },
});

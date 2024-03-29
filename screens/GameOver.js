import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
function GameOver({ userNumber, userRound, onStrtNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 380) {
    imageSize = 150;
  }

  let landScapeView = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.landScapeView}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, landScapeView]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          ></Image>
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your Phone need{" "}
            <Text style={styles.highlightText}>{userRound}</Text> rounds to
            guess the number
            <Text style={styles.highlightText}>{userNumber}.</Text>
          </Text>
        </View>
        <PrimaryButton onPress={onStrtNewGame}>Restart</PrimaryButton>
      </View>
    </ScrollView>
  );
}
export default GameOver;

const deviceWidth = Dimensions.get("window").width;

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
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 30,
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    marginBottom: "30",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
  },
  scrollView: {
    flex: 1,
  },
});

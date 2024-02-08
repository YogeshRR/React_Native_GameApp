import { View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View>
      <PrimaryButton>Cancel</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

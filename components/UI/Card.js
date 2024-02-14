import { Dimensions, StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;
export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessNumberList({ roundNumber, guess }) {
  return (
    <View style={styles.list}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess{guess}</Text>
    </View>
  );
}

export default GuessNumberList;

const styles = StyleSheet.create({
  list: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    backgroundColor: Colors.accentColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 40,
    width: "100%",
    marginVertical: 8,
    padding: 12,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },

  itemText: {
    fontFamily: "open-sans-regular",
  },
});

import { View, Text, StyleSheet } from "react-native";

const ExerciseItem = ({ name, weights, sets, reps, breaks }) => (
  <View style={styles().container}>
    <Text style={styles().name}>{name}</Text>
    <Text style={styles().text}>{weights} kg</Text>
    <Text style={styles().text}>{sets}</Text>
    <Text style={styles().text}>{reps}</Text>
    <Text style={styles().text}>{breaks} s</Text>
  </View>
);

const styles = () => StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    flexDirection: "row",
    paddingVertical: 8,
    marginTop: 8,
    borderRadius: 12,
  },
  name: {
    flex: 2,
    textAlign: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
  }
});

export default ExerciseItem;

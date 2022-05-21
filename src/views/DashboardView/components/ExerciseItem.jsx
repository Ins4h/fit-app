import { View, Text, StyleSheet } from "react-native";

const ExerciseItem = ({ name, weights, sets, reps}) => (
  <View style={styles().container}>
    <Text style={styles().name}>{name + " "}</Text>
    <Text style={styles().text}>{weights + "kg "}</Text>
    <Text style={styles().text}>{sets + "x" + reps}</Text>
  </View>
);

const styles = () => StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },

});

export default ExerciseItem;
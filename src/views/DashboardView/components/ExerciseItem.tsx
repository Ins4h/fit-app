import { View, Text, StyleSheet } from "react-native";

interface ExerciseItemProps {
  name: string;
  weights: number;
  sets: number;
  reps: number;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ name, weights, sets, reps}) => (
  <View style={styles().container}>
    <Text >{name + " "}</Text>
    <Text >{weights + "kg "}</Text>
    <Text >{sets + "x" + reps}</Text>
  </View>
);

const styles = () => StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },

});

export default ExerciseItem;
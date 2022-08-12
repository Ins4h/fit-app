import { Key } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ExerciseItemProps {
  name: string;
  weights: number;
  sets: number;
  reps: number;
  breaks: number;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({
  name,
  weights,
  sets,
  reps,
  breaks,
}) => (
  <View style={styles().container}>
    <Text style={styles().name}>{name}</Text>
    <Text style={styles().text}>{weights} kg</Text>
    <Text style={styles().text}>{sets}</Text>
    <Text style={styles().text}>{reps}</Text>
    <Text style={styles().text}>{breaks} s</Text>
  </View>
);

const styles = () =>
  StyleSheet.create({
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
    },
  });

export default ExerciseItem;

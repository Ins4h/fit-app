import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import type { ExerciseItemProp } from "../../../../types";

const StartExercise: React.FC<{ exerciseItem: ExerciseItemProp }> = ({
  exerciseItem,
}) => {
  // const [is, setIsStarted] = useState(false);
  const [weight, setWeight] = useState(exerciseItem.weights.toString());
  const [reps, setReps] = useState(exerciseItem.reps.toString());
  const [exerciseDone, setExerciseDone] = useState([]);

  const onSetFinish = () => {
    setExerciseDone((prev) => [
      ...prev,
      {
        name: exerciseItem.name,
        id: exerciseItem.id,
        weight: Number(weight),
        reps: Number(reps),
        breaks: exerciseItem.breaks,
        date: new Date(),
      },
    ]);
  };

  return (
    <View style={styles().wrapper}>
      <Text>{exerciseItem.name}</Text>
      {Array.from({ length: exerciseItem.sets }).map((_, i) => {
        const done = i <= exerciseDone.length - 1;

        return (
          <View style={styles(null, done).exerciseItem}>
            <Button title="save" onPress={onSetFinish} disabled={done} />
            <TextInput
              style={styles().textInput}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />
            <TextInput
              style={styles().textInput}
              value={reps}
              onChangeText={setReps}
              keyboardType="numeric"
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = (background?, done?) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: background,
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      width: "82%",
    },
    exerciseItem: {
      backgroundColor: done ? "green" : "rgba(255, 255, 255, 0.05)",
      flexDirection: "row",
      padding: 8,
      marginTop: 8,
      borderRadius: 4,
    },
    textInput: {
      color: "white",
    },
  });
export default StartExercise;

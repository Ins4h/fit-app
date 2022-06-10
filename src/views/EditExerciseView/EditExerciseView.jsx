import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import uuid from "react-native-uuid";

const EditExerciseView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation()

  const [title, setTitle] = useState()
  const [weights, setWeights] = useState()
  const [sets, setSets] = useState()
  const [reps, setReps] = useState()
  const [breaks, setBreaks] = useState()

  const saveExercise = () => {
    const exercise = {
      id: uuid.v4(),
      name: title,
      weights: weights,
      sets: sets,
      reps: reps,
      breaks: breaks,
    }
    navigation.navigate("EditWorkout", { exercise: exercise })
  }

  return (
    <View style={styles(background).wrapper}>
      <ScrollView
        style={{
          flex: 1,
          width: "93%",
        }}
      >
        <FitInput
          style={styles().spacing}
          label="Title"
          mode="outlined"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <FitInput
          style={styles().spacing}
          keyboardType="numeric"
          label="Weights"
          mode="outlined"
          onChangeText={(text) => setWeights(text.replace(/[^0-9]/g, ''))}
          value={weights}
        />
        <FitInput
          style={styles().spacing}
          keyboardType="numeric"
          label="Sets"
          mode="outlined"
          onChangeText={(text) => setSets(text.replace(/[^0-9]/g, ''))}
          value={sets}
        />
        <FitInput
          style={styles().spacing}
          keyboardType="numeric"
          label="Reps"
          mode="outlined"
          onChangeText={(text) => setReps(text.replace(/[^0-9]/g, ''))}
          value={reps}
        />
        <FitInput
          style={styles().spacing}
          keyboardType="numeric"
          label="Break"
          mode="outlined"
          onChangeText={(text) => setBreaks(text.replace(/[^0-9]/g, ''))}
          value={breaks}
        />
        <FitButton
          style={styles().addButton}
          size="medium"
          onPress={saveExercise}
        >
          ADD
        </FitButton>

      </ScrollView>
    </View>
  );
};

const styles = (background) => StyleSheet.create({
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
  addButton: {
    alignSelf: "center",
    marginVertical: 16,
  },
  spacing: {
    marginTop: 16,
  },
});

export default withTheme(EditExerciseView);
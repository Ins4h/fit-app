import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import WorkoutDay from "./components/WorkoutDay";
import uuid from "react-native-uuid";

const mockWorkoutDays = [
  { id: uuid.v4(), name: "Klata, plecy, barki", day: "Monday", time: "16:30", breaks: 60, exercises: [] },
];

const WorkoutPlanView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [workoutDays, setWorkoutDays] = useState([...mockWorkoutDays])

  useEffect(() => {
    setWorkoutDays([...workoutDays, route.params.workoutDay])
  }, [route])

  return (
    <View style={styles(background).wrapper}>
      <ScrollView
        style={{
          flex: 1,
          width: "93%",
        }}
      >
        <FitInput style={styles().spacing} label="Title" mode="outlined" />
        <FitInput
          style={styles().spacing}
          label="Description"
          mode="outlined"
        />
        <View style={[styles().spacing, styles().buttonContainer]}>
          <FitButton
            style={{ marginRight: 5, flex: 1 }}
            onPress={() => navigation.navigate("WorkoutPreset")}
          >
            Choose Preset
          </FitButton>
          <FitButton
            style={{ marginLeft: 5, flex: 1 }}
            onPress={() => alert("Workout plan saved.")}
          >
            Save
          </FitButton>
        </View>
        <View>
          <Text style={[styles().spacing, styles().title]}>Workout Plan</Text>
          {workoutDays.map((item) => (
            <WorkoutDay
              name={item.name}
              day={item.day}
              time={item.time}
              key={item.id}
            />
          ))}
        </View>
        <FitButton
          style={styles().addButton}
          size="medium"
          onPress={() => { navigation.navigate("EditWorkout") }}
        >
          ADD
        </FitButton>
      </ScrollView>
    </View>
  );
};

const styles = (background) =>
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

    signUpText: {
      fontSize: 10,
    },

    buttonContainer: {
      flexDirection: "row",
    },

    title: {
      fontSize: 24,
    },

    addButton: {
      alignSelf: "center",
      marginVertical: 16,
    },

    spacing: {
      marginTop: 16,
    },
  });

export default withTheme(WorkoutPlanView);

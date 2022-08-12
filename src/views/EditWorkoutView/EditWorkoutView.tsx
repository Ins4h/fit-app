import React, { useState, useEffect, Key } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import FitInput from "../../components/FitInput";
import FitButton from "../../components/FitButton";
import ExerciseItem from "./components/ExerciseItem";
import FitDateTimePicker from "../../components/FitDateTimePicker";
import FitDropDown from "../../components/FitDropDown";
import uuid from "react-native-uuid";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import type { ThemeTypes } from "../../theme/theme";

const EditWorkoutView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();
  const route = useRoute<RouteProp<WorkoutPlanStackParams>>();

  const [title, setTitle] = useState<string>();
  const [breaks, setBreaks] = useState<string>();
  const [startTime, setStartTime] = useState<string>();
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>();
  const [exercises, setExercises] = useState([...mockExerciseItems]);

  const onStartTimePick = (time) => {
    setShowDateTimePicker(false);
    setStartTime(time);
  };

  const chooseExercises = () => {
    navigation.navigate("ListOfExercises");
  };

  const addYourExercises = () => {
    navigation.navigate("EditExercise");
  };

  const saveWorkout = () => {
    const workout = {
      id: uuid.v4(),
      name: title,
      day: selectedDay,
      time: startTime,
      breaks: breaks,
      exercises: exercises,
    };
    navigation.navigate("WorkoutPlan", { workoutDay: workout });
  };

  useEffect(() => {
    setExercises([...exercises, route.params.exercise]);
  }, [route]);

  return (
    <ScrollView>
      <View style={styles(background).container}>
        <FitDropDown
          label={"Select day"}
          data={days}
          onSelect={(day) => setSelectedDay(day)}
        />
        <View style={{ height: 16 }} />
        <FitInput
          label="Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
          mode="outlined"
        />
        <View style={{ height: 16 }} />
        <FitInput
          label="Break beetween exercises"
          keyboardType="numeric"
          onChangeText={(text) => setBreaks(text.replace(/[^0-9]/g, ""))}
          value={breaks}
          maxLength={3}
          mode="outlined"
        />
        <View style={{ height: 16 }} />
        <FitInput
          label="Start time"
          onFocus={() => setShowDateTimePicker(true)}
          value={startTime}
          showSoftInputOnFocus={false}
          mode="outlined"
        />
        {showDateTimePicker && (
          <FitDateTimePicker
            type={"time"}
            onPick={(time) => onStartTimePick(time)}
          />
        )}
        <View style={styles().buttonsRow}>
          <FitButton
            style={{ flex: 1, marginRight: 16 }}
            onPress={chooseExercises}
          >
            CHOOSE
          </FitButton>
          <FitButton style={{ flex: 1 }} onPress={addYourExercises}>
            ADD
          </FitButton>
        </View>
        <View style={styles().listDescription}>
          <Text style={styles().listDescriptionName}>Name</Text>
          <Text style={styles().listDescriptionItem}>Weights</Text>
          <Text style={styles().listDescriptionItem}>Sets</Text>
          <Text style={styles().listDescriptionItem}>Reps</Text>
          <Text style={styles().listDescriptionItem}>Breaks</Text>
        </View>
        {exercises.map((item) => (
          <ExerciseItem
            key={item.id as Key}
            name={item.name}
            weights={item.weights}
            sets={item.sets}
            reps={item.reps}
            breaks={item.breaks}
          />
        ))}
        <FitButton
          style={{ marginTop: 16 }}
          size={"large"}
          onPress={saveWorkout}
        >
          save workout
        </FitButton>
      </View>
    </ScrollView>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      padding: 16,
    },
    buttonsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 16,
    },
    listDescription: {
      flexDirection: "row",
      marginTop: 32,
    },
    listDescriptionName: {
      flex: 2,
      textAlign: "center",
    },
    listDescriptionItem: {
      flex: 1,
      textAlign: "center",
    },
  });

const mockExerciseItems = [
  { id: uuid.v4(), name: "Squats", weights: 0, sets: 5, reps: 10, breaks: 60 },
  {
    id: uuid.v4(),
    name: "Push-ups",
    weights: 0,
    sets: 3,
    reps: 10,
    breaks: 30,
  },
  { id: uuid.v4(), name: "Crunches", weights: 0, sets: 4, reps: 8, breaks: 30 },
];

const days = [
  { id: 0, label: "Monday" },
  { id: 1, label: "Tuesday" },
  { id: 2, label: "Wednesday" },
  { id: 3, label: "Thursday" },
  { id: 4, label: "Friday" },
  { id: 5, label: "Saturday" },
  { id: 6, label: "Sunday" },
];

export default withTheme(EditWorkoutView);

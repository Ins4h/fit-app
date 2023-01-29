import React, { useState, useEffect, Key } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import FitInput from "../../components/FitInput";
import FitButton from "../../components/FitButton";
import ExerciseItem from "./components/ExerciseItem";
import FitDateTimePicker from "../../components/FitDateTimePicker";
import FitDropDown from "../../components/FitDropDown";
import uuid from "react-native-uuid";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  removeWorkoutItem,
  saveWorkoutItem,
} from "../../feature/workoutPlan/workoutPlanSlice";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import type { ThemeTypes } from "../../theme/theme";
import type {
  WorkoutPlanProp,
  WorkoutItemProp,
  ExerciseItemProp,
} from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons/faSignature";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons/faChildReaching";
import { faRepeat } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch";

interface EditWorkoutViewProp {
  theme: ThemeTypes;
  route: RouteProp<WorkoutPlanStackParams>;
}

const EditWorkoutView: React.FC<EditWorkoutViewProp> = ({
  theme: {
    colors: { background },
  },
  route,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();

  const workoutPlanItem: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  const workoutItemId = route.params?.workoutItemId;

  const workoutItem = workoutPlanItem.workoutItem.find(
    (val) => val.id === route.params?.workoutItemId
  );

  const [title, setTitle] = useState<string>(workoutItem?.name);
  const [breaks, setBreaks] = useState<string>(
    workoutItem?.breaksBetweenExercises?.toString()
  );
  const [startTime, setStartTime] = useState<string>(workoutItem?.time);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>(workoutItem?.day);

  const dispatch = useAppDispatch();

  const workoutMock: WorkoutItemProp = {
    id: workoutItemId,
    name: "",
    description: "",
    day: "",
    time: "",
    breaksBetweenExercises: null,
    exercises: [],
  };

  useEffect(() => {
    if (!workoutItem) {
      dispatch(saveWorkoutItem(workoutMock));
    }
  }, []);

  // if (!workoutItem) {
  //   const workoutMock: WorkoutItemProp = {
  //     id: uuid.v4().toString(),
  //     name: "",
  //     description: "",
  //     day: "",
  //     time: "",
  //     breaksBetweenExercises: null,
  //     exercises: [],
  //   };

  //   dispatch(saveWorkoutItem(workoutMock));
  // }

  const onStartTimePick = (time) => {
    setShowDateTimePicker(false);
    setStartTime(time);
  };

  const chooseExercises = () => {
    navigation.navigate("ListOfExercises");
  };

  const addYourExercises = () => {
    navigation.navigate("EditExercise", {
      workoutItemId: workoutItemId,
    });
  };

  const saveWorkout = () => {
    const workout: WorkoutItemProp = {
      id: workoutItemId,
      name: title,
      description: "",
      day: selectedDay,
      time: startTime,
      breaksBetweenExercises: parseInt(breaks),
      exercises: workoutItem?.exercises ? workoutItem.exercises : [],
    };
    dispatch(saveWorkoutItem(workout));
    navigation.navigate("WorkoutPlan");
  };

  const removeWorkout = () => {
    if (workoutItem) {
      dispatch(
        removeWorkoutItem({
          workoutItemId: route.params.workoutItemId,
        })
      );
    }
    navigation.navigate("WorkoutPlan");
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles(background).container}>
        <FitDropDown
          label={workoutItem?.day !== "" ? workoutItem?.day : "Select day"}
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
          label="Break beetween exercises [s]"
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
            ADD EXERCISE
          </FitButton>
        </View>
        <View style={styles().listDescription}>
          <View style={styles().listDescriptionName}>
            <FontAwesomeIcon icon={faSignature} color="white" size={24} />
          </View>
          <View style={styles().listDescriptionItem}>
            <FontAwesomeIcon
              icon={faDumbbell}
              color="white"
              size={24}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles().listDescriptionItem}>
            <FontAwesomeIcon
              icon={faRepeat}
              color="white"
              size={24}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles().listDescriptionItem}>
            <FontAwesomeIcon
              icon={faChildReaching}
              color="white"
              size={24}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles().listDescriptionItem}>
            <FontAwesomeIcon
              icon={faStopwatch}
              color="white"
              size={24}
              style={{ flex: 1 }}
            />
          </View>
        </View>
        {workoutItem?.exercises.length === 0 ? (
          <Text style={{ marginTop: 16, width: "100%", textAlign: "center" }}>
            No exercises for now
          </Text>
        ) : (
          workoutItem?.exercises.map((item) => (
            <TouchableOpacity
              key={item.id as Key}
              onPress={() =>
                navigation.navigate("EditExercise", {
                  exerciseItemId: item.id,
                  workoutItemId: route.params.workoutItemId,
                })
              }
            >
              <ExerciseItem
                name={item.name}
                weights={item.weights}
                sets={item.sets}
                reps={item.reps}
                breaks={item.breaks}
              />
            </TouchableOpacity>
          ))
        )}
        <FitButton
          style={{ marginTop: 32 }}
          size={"large"}
          onPress={removeWorkout}
        >
          remove Workout
        </FitButton>
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
      alignItems: "center",
    },
    listDescriptionItem: {
      flex: 1,
      alignItems: "center",
    },
  });

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

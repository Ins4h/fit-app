import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import firebaseApp, { auth } from "../../../firebase.config";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { initPlan } from "../../feature/workoutPlan/workoutPlanSlice";
import FitButton from "../../components/FitButton";
import ExerciseItem from "./components/ExerciseItem";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParams } from "../../../App";
import type { ThemeTypes } from "../../theme/theme";
import type {
  ExerciseItemProp,
  WorkoutItemProp,
  WorkoutPlanProp,
} from "../../../types";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";

const db = getFirestore(firebaseApp);

const DashboardView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const user = auth.currentUser;
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   dispatch(initPlan(workoutPlanMock));
  // }, []);

  const haveCurrentWorkout = false;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      )
      .catch((error) => alert(error.message));
  };

  // useEffect(() => {
  //   const fetchWorkout = async () => {
  //     const workoutData = await getData();
  //     if (workoutData) {
  //       dispatch(savePlan(workoutData.workoutDays))
  //     }
  //   };
  //   fetchWorkout();
  // }, []);

  // const getData = async () => {
  //   const docRef = doc(db, "workoutPlan", user.uid);
  //   const docSnap = await getDoc(docRef);
  //   return docSnap.data();
  // };

  // console.log(workoutPlan);

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        backgroundColor: background,
      }}
    >
      {haveCurrentWorkout ? (
        <View style={styles().container}>
          <Text style={styles().title}>Your next workout day</Text>
          <View style={styles().workoutDay}>
            <Text style={styles().dayDate}>{"MON" + "\n" + 23}</Text>
            <View>
              {exerciseItems?.map((item) => (
                <ExerciseItem
                  key={item.id}
                  name={item.name}
                  weights={item.weights}
                  sets={item.sets}
                  reps={item.reps}
                />
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles().container}>
          <Text>No workout</Text>
        </View>
      )}

      <View
        style={{
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FitButton onPress={handleSignOut}>SignOut</FitButton>
      </View>
    </View>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    container: {
      padding: 16,
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: 16,
    },
    workoutDay: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
    },
    dayDate: {
      fontSize: 28,
      color: "green",
      borderColor: "green",
      borderRadius: 16,
      borderWidth: 3,
      padding: 10,
      marginTop: 10,
      marginRight: 20,
      textAlign: "center",
      fontWeight: "bold",
    },
  });

const exerciseItems: ExerciseItemProp[] = [
  { id: 3, name: "Squats", weights: 50, sets: 4, reps: 8, breaks: 30 },
  { id: 4, name: "Leg press", weights: 80, sets: 4, reps: 12, breaks: 30 },
  { id: 5, name: "Benchpress", weights: 90, sets: 4, reps: 8, breaks: 30 },
  { id: 6, name: "Chest fly", weights: 12.5, sets: 4, reps: 8, breaks: 30 },
];

const exerciseItems2: ExerciseItemProp[] = [
  { id: 7, name: "Squats", weights: 50, sets: 4, reps: 8, breaks: 30 },
  { id: 8, name: "Leg press", weights: 80, sets: 4, reps: 12, breaks: 30 },
  { id: 9, name: "Benchpress", weights: 90, sets: 4, reps: 8, breaks: 30 },
  { id: 10, name: "Chest fly", weights: 12.5, sets: 4, reps: 8, breaks: 30 },
];
const workoutItems: WorkoutItemProp[] = [
  {
    id: 1,
    name: "Klata plecy barki",
    description: "zachowanie mocy",
    time: "17:00",
    breaksBetweenExercises: 120,
    day: "Monday",
    warmupTime: 15,
    exercises: exerciseItems,
  },
  {
    id: 2,
    name: "nogi",
    description: "zachowanie mocy",
    time: "17:00",
    breaksBetweenExercises: 120,
    day: "wednesday",
    warmupTime: 15,
    exercises: exerciseItems2,
  },
];

const workoutPlanMock: WorkoutPlanProp = {
  id: 0,
  name: "Trójbój",
  description: "maintaining",
  workoutItem: workoutItems,
};

export default withTheme(DashboardView);

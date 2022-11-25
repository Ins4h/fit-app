import React, { useState, useEffect, Key } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import WorkoutDay from "../../components/WorkoutDay";
import uuid from "react-native-uuid";
import firebaseApp, { auth } from "../../../firebase.config";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { useAppSelector } from "../../hooks/reduxHooks";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkoutPlanStackParams } from "./WorkoutPlanStack";
import type { ThemeTypes } from "../../theme/theme";
import type { WorkoutItemProp, WorkoutPlanProp } from "../../../types";
import { saveWorkoutItem } from "../../feature/workoutPlan/workoutPlanSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const db = getFirestore(firebaseApp);

const WorkoutPlanView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();
  const route = useRoute<RouteProp<WorkoutPlanStackParams>>();
  const user = auth.currentUser;

  const workoutPlanItem: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  const haveCurrentWorkout = workoutPlanItem ? true : false;

  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (route.params) {
  //     setWorkoutDays([...workoutDays, route.params.workoutDay]);
  //   }
  // }, [route]);

  // useEffect(() => {
  //   const fetchWorkout = async () => {
  //     const workoutData = await getData();
  //     if (workoutData) {
  //       setWorkoutDays(workoutData.workoutDays);
  //     }
  //   };
  //   fetchWorkout();
  // }, []);

  // const getData = async () => {
  //   const docRef = doc(db, "workoutPlan", user.uid);
  //   const docSnap = await getDoc(docRef);
  //   return docSnap.data();
  // };

  // const saveData = async () => {
  //   try {
  //     const dataRef = doc(db, "workoutPlan", user.uid);
  //     const dataSnap = await getDoc(dataRef);

  //     if (dataSnap.exists()) {
  //       await updateDoc(dataRef, {
  //         workoutDays: workoutDays,
  //       });
  //     } else {
  //       await setDoc(dataRef, {
  //         workoutDays: workoutDays,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error writing new data to Firebase Database", error);
  //   }
  // };

  const onWorkoutPlanAdd = () => {
    navigation.navigate("EditPlan", {
      workoutItemId: uuid.v4().toString(),
    });
  };

  if (haveCurrentWorkout) {
    return (
      <View style={styles(background).wrapper}>
        <ScrollView
          style={{
            flex: 1,
            width: "93%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditPlan", {
                workoutPlanId: workoutPlanItem.id,
              });
            }}
          >
            <View
              style={[
                styles().spacing,
                styles().buttonContainer,
                { justifyContent: "center" },
              ]}
            >
              <View
                style={{
                  backgroundColor: "green",
                  width: "93%",
                  alignSelf: "center",
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={[styles().workoutPlanTitle]}>{workoutPlanItem.name}</Text>
                <Text style={[styles().workoutPlanDescription]}>{workoutPlanItem.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={[styles().spacing, styles().title]}>Workout Plan</Text>
            {workoutPlanItem?.workoutItem.length > 0 &&
              workoutPlanItem?.workoutItem.map((item) => (
                <TouchableOpacity
                  key={item.id as Key}
                  onPress={() => {
                    navigation.navigate("EditWorkout", {
                      workoutItemId: item.id,
                    });
                  }}
                >
                  <WorkoutDay
                    name={item.name}
                    day={item.day}
                    time={item.time}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <FitButton
            style={[styles().addDayButton]}
            size="medium"
            onPress={() => {
              // const workoutMock: WorkoutItemProp = {
              //   id: uuid.v4().toString(),
              //   name: "",
              //   description: "",
              //   day: "",
              //   time: "",
              //   breaksBetweenExercises: 0,
              //   exercises: [],
              // };

              // dispatch(saveWorkoutItem(workoutMock));
              navigation.navigate("EditWorkout", {
                workoutItemId: uuid.v4().toString(),
              });
            }}
          >
            ADD DAY
          </FitButton>
          <FitButton
            style={[styles().startWorkoutButton]}
            size="medium"
            onPress={() => {
              navigation.navigate("EditWorkout");
            }}
          >
            Start workout
          </FitButton>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles(background).wrapper}>
        <ScrollView
          style={{
            flex: 1,
            width: "93%",
          }}
        >
          <FitButton
            style={[styles().addWorkoutButton]}
            onPress={onWorkoutPlanAdd}
          >
            Add your workout
          </FitButton>
        </ScrollView>
      </View>
    );
  }
};

const styles = (background?) =>
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
    startWorkoutButton: {
      alignSelf: "center",
      marginVertical: 16,
    },
    addDayButton: {
      alignSelf: "center",
      marginTop: 16,
    },
    spacing: {
      marginTop: 16,
    },
    addWorkoutButton: {
      marginTop: 16,
    },
    workoutPlanTitle: {
      fontWeight: "bold",
      marginVertical: 16,
      fontSize: 20,
    },
    workoutPlanDescription: {
      marginBottom: 16,
      fontSize: 16,
    },
  });

export default withTheme(WorkoutPlanView);

import React, { useState, useEffect, Key } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ThemeTypes } from "../../theme/theme";
import { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";

const db = getFirestore(firebaseApp);

interface ExerciseItemProps {
  name: string;
  weights: number;
  sets: number;
  reps: number;
  breaks: number;
}

interface WorkoutItemTypes {
  id: string | number[];
  name: string;
  day: string;
  time: string;
  exercises: ExerciseItemProps[];
}

const mockWorkoutDays: WorkoutItemTypes[] = [
  {
    id: uuid.v4(),
    name: "Klata, plecy, barki",
    day: "Monday",
    time: "16:30",
    exercises: [],
  },
];

const EditPlanView: React.FC<{ theme: ThemeTypes }> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();
  const route = useRoute<RouteProp<WorkoutPlanStackParams>>();

  const [workoutDays, setWorkoutDays] = useState<WorkoutItemTypes[]>([]);
  const user = auth.currentUser;
  const haveCurrentWorkout = false;

  useEffect(() => {
    if (route.params) {
      setWorkoutDays([...workoutDays, route.params.workoutDay]);
    }
  }, [route]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutData = await getData();
      if (workoutData) {
        setWorkoutDays([...workoutData.workoutDays]);
      }
    };
    fetchWorkout();
  }, []);

  const getData = async () => {
    const docRef = doc(db, "workoutPlan", user.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  const saveData = async () => {
    try {
      const dataRef = doc(db, "workoutPlan", user.uid);
      const dataSnap = await getDoc(dataRef);

      if (dataSnap.exists()) {
        await updateDoc(dataRef, {
          workoutDays: workoutDays,
        });
      } else {
        await setDoc(dataRef, {
          workoutDays: workoutDays,
        });
      }
    } catch (error) {
      console.error("Error writing new data to Firebase Database", error);
    }
  };

  return (
    <View style={styles(background).wrapper}>
      <ScrollView
        style={{
          flex: 1,
          width: "93%",
        }}
      >
        <FitInput label="Plan Name" mode="outlined" />
        <FitInput label="Description" mode="outlined" />
        <View>
          <Text style={[styles().spacing, styles().title]}>Workout Plan</Text>
          {workoutDays.length > 0 &&
            workoutDays.map((item) => (
              <WorkoutDay
                name={item.name}
                day={item.day}
                time={item.time}
                key={item.id as Key}
              />
            ))}
        </View>
        <FitButton
          style={styles().addButton}
          size="medium"
          onPress={() => {
            navigation.navigate("EditWorkout");
          }}
        >
          ADD
        </FitButton>
      </ScrollView>
    </View>
  );
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
    addButton: {
      alignSelf: "center",
      marginVertical: 16,
    },
    spacing: {
      marginTop: 16,
    },
  });

export default withTheme(EditPlanView);

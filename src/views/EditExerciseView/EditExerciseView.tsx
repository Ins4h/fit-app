import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import uuid from "react-native-uuid";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import type { ThemeTypes } from "../../theme/theme";
import type { WorkoutPlanProp, ExerciseItemProp } from "../../../types";
import {
  removeExerciseItem,
  saveExerciseItem,
} from "../../feature/workoutPlan/workoutPlanSlice";

interface EditExerciseViewProp {
  theme: ThemeTypes;
  route: RouteProp<WorkoutPlanStackParams>;
}

const EditExerciseView: React.FC<EditExerciseViewProp> = ({
  theme: {
    colors: { background },
  },
  route,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();

  const dispatch = useAppDispatch();

  const workoutPlanItem: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  let exerciseItem: ExerciseItemProp;
  if (route.params?.exerciseItemId) {
    exerciseItem = workoutPlanItem.workoutItem
      .find((item) => item.id === route.params.workoutItemId)
      .exercises.find((item) => item.id === route.params.exerciseItemId);
  }

  const [title, setTitle] = useState<string>(exerciseItem?.name);
  const [weights, setWeights] = useState<string>(
    exerciseItem?.weights.toString()
  );
  const [sets, setSets] = useState<string>(exerciseItem?.sets.toString());
  const [reps, setReps] = useState<string>(exerciseItem?.reps.toString());
  const [breaks, setBreaks] = useState<string>(exerciseItem?.breaks.toString());

  const saveExercise = () => {
    const exercise: ExerciseItemProp = {
      id: exerciseItem ? exerciseItem.id : uuid.v4().toString(),
      name: title,
      weights: parseInt(weights),
      sets: parseInt(sets),
      reps: parseInt(reps),
      breaks: parseInt(breaks),
    };

    const payload: {
      exercise: ExerciseItemProp;
      workoutItemId: string | number;
    } = {
      exercise,
      workoutItemId: route.params.workoutItemId,
    };

    dispatch(saveExerciseItem(payload));
    navigation.navigate("EditWorkout", {
      workoutItemId: route.params.workoutItemId,
    });
  };

  const removeExercise = () => {
    dispatch(
      removeExerciseItem({
        exerciseItemId: exerciseItem.id,
        workoutItemId: route.params.workoutItemId,
      })
    );

    navigation.navigate("EditWorkout", {
      workoutItemId: route.params.workoutItemId,
    });
  };

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
          label="Weights"
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(text) => setWeights(text.replace(/[^0-9]/g, ""))}
          value={weights}
        />
        <FitInput
          style={styles().spacing}
          label="Sets"
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(text) => setSets(text.replace(/[^0-9]/g, ""))}
          value={sets}
        />
        <FitInput
          style={styles().spacing}
          label="Reps"
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(text) => setReps(text.replace(/[^0-9]/g, ""))}
          value={reps}
        />
        <FitInput
          style={styles().spacing}
          label="Break"
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(text) => setBreaks(text.replace(/[^0-9]/g, ""))}
          value={breaks}
        />
        <View style={styles().buttonWrapper}>
          <FitButton
            style={{ width: "45%" }}
            size="medium"
            onPress={removeExercise}
          >
            Remove
          </FitButton>
          <FitButton
            style={{ width: "45%" }}
            size="medium"
            onPress={saveExercise}
          >
            save
          </FitButton>
        </View>
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

    buttonWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50,
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import type {
  WorkoutPlanProp,
  WorkoutItemProp,
  ExerciseItemProp,
} from "../../../types";

const workoutPlanSlice = createSlice({
  name: "plan",
  initialState: null,
  reducers: {
    savePlan(
      state: WorkoutPlanProp | null,
      action: PayloadAction<WorkoutPlanProp>
    ) {
      return action.payload;
    },

    saveWorkoutItem(
      state: WorkoutPlanProp,
      action: PayloadAction<WorkoutItemProp>
    ) {
      const wokroutIndex = state.workoutItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (wokroutIndex !== -1) {
        state.workoutItem[wokroutIndex] = action.payload;
      } else state.workoutItem.push(action.payload);
    },

    removeWorkoutItem(
      state: WorkoutPlanProp,
      action: PayloadAction<{ workoutItemId: string | number }>
    ) {
      const workoutIndex = state.workoutItem.findIndex(
        (workoutItem) => workoutItem.id === action.payload.workoutItemId
      );

      state.workoutItem.splice(workoutIndex, 1);
    },

    saveExerciseItem(
      state: WorkoutPlanProp,
      action: PayloadAction<{
        exercise: ExerciseItemProp;
        workoutItemId: string | number;
      }>
    ) {
      const workoutIndex = state.workoutItem.findIndex(
        (workoutItem) => workoutItem.id === action.payload.workoutItemId
      );
      const exerciseIndex = state.workoutItem[workoutIndex].exercises.findIndex(
        (exerciseItem) => exerciseItem.id === action.payload.exercise.id
      );
      if (exerciseIndex === -1) {
        state.workoutItem[workoutIndex].exercises.push(action.payload.exercise);
      } else
        state.workoutItem[workoutIndex].exercises[exerciseIndex] =
          action.payload.exercise;
    },

    removeExerciseItem(
      state: WorkoutPlanProp,
      action: PayloadAction<{
        exerciseItemId: string | number;
        workoutItemId: string | number;
      }>
    ) {
      const workoutIndex = state.workoutItem.findIndex(
        (workoutItem) => workoutItem.id === action.payload.workoutItemId
      );

      const exerciseIndex = state.workoutItem[workoutIndex].exercises.findIndex(
        (exerciseItem) => exerciseItem.id === action.payload.exerciseItemId
      );

      state.workoutItem[workoutIndex].exercises.splice(exerciseIndex, 1);
    },
  },
});

export const {
  savePlan,
  saveWorkoutItem,
  removeWorkoutItem,
  saveExerciseItem,
  removeExerciseItem,
} = workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;

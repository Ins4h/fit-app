import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { WorkoutPlanProp } from "../../../types";

const workoutPlanSlice = createSlice({
  name: "plan",
  initialState: {},
  reducers: {
    savePlan(
      state: WorkoutPlanProp | {},
      action: PayloadAction<WorkoutPlanProp>
    ) {
      return action.payload;
    },
  },
});

export const { savePlan } = workoutPlanSlice.actions;
export default workoutPlanSlice.reducer;

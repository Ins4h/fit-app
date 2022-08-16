import { configureStore } from "@reduxjs/toolkit";
import workoutPlanReducer from "./src/feature/workoutPlan/workoutPlanSlice";

export const store = configureStore({
  reducer: {
    plan: workoutPlanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

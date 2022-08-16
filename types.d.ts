import { ThemeTypes } from "./src/theme/theme";

declare global {
  namespace ReactNativePaper {
    interface Theme extends ThemeTypes {
      colors: {
        primaryGreen: string[];
      };
    }
  }
}

export interface ExerciseItemProp {
  id: string | number;
  name: string;
  weights: number | null;
  sets: number | null;
  reps: number | null;
  breaks: number | null;
}

export interface WorkoutItemProp {
  id: string | number;
  name: string;
  description?: string;
  time: string;
  day: string;
  breaksBetweenExercises: number | null;
  warmupTime?: number;
  exercises: ExerciseItemProp[];
}

export interface WorkoutPlanProp {
  id: string | number;
  name: string;
  description?: string;
  workoutItem: WorkoutItemProp[];
}

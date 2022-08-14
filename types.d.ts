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
  weights: number;
  sets: number;
  reps: number;
  breaks: number;
}

export interface WorkoutItemProp {
  id: string | number;
  name: string;
  description: string;
  time: string;
  day: string;
  breaksBetweenExercises: number;
  warmupTime: number;
  exercises: ExerciseItem[];
}

export interface WorkoutPlanProp {
  id: string | number;
  name: string;
  description: string;
  workoutItem: WorkoutItem[];
}

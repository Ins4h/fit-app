import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ThemeTypes } from "../../../theme/theme";
import { StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { WorkoutPlanProp } from "../../../../types";
import FitButton from "../../../components/FitButton";
import { width } from "@fortawesome/free-solid-svg-icons/faSignature";

const WarmupTimer: React.FC = () => {
  const workoutPlan: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  const warmupTime = 15;
  const [timer, setTimer] = useState(warmupTime * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => setTimer(timer - 1), 1000);
    } else if (!isActive && timer > 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  // console.log(workoutPlan);

  return (
    <View style={styles().wrapper}>
      <Text>
        {minutes} : {seconds}
      </Text>
      <FitButton size="medium" onPress={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </FitButton>
      <FitButton
        size="medium"
        onPress={() => {
          setTimer(warmupTime * 60);
          setIsActive(false);
        }}
      >
        Reset
      </FitButton>
    </View>
  );
};

const styles = (background?) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: background,
      width: "100%",
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      width: "82%",
    },
  });
export default WarmupTimer;

import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { initPlan, savePlan } from "../../feature/workoutPlan/workoutPlanSlice";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ThemeTypes } from "../../theme/theme";
import type { WorkoutPlanStackParams } from "../WorkoutPlanView/WorkoutPlanStack";
import type { WorkoutPlanProp } from "../../../types";
import uuid from "react-native-uuid";

interface EditPlanProp {
  theme: ThemeTypes;
  route: RouteProp<WorkoutPlanStackParams>;
}

const EditPlanView: React.FC<EditPlanProp> = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WorkoutPlanStackParams>>();

  const workoutPlanItem: WorkoutPlanProp | null = useAppSelector(
    (state) => state.plan
  );

  const workoutPlanId = workoutPlanItem?.id
    ? workoutPlanItem.id
    : uuid.v4().toString();

  const [title, setTitle] = useState<string>(workoutPlanItem?.name);
  const [description, setDescription] = useState<string>(
    workoutPlanItem?.description
  );
  const dispatch = useAppDispatch();

  const savePlanChanges = () => {
    if (workoutPlanItem) {
      dispatch(savePlan({ title, description }));
    } else {
      dispatch(
        initPlan({
          id: workoutPlanId,
          name: title,
          description,
          workoutItem: [],
        })
      );
    }
    navigation.goBack();
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
          label="Plan Name"
          mode="outlined"
          onChangeText={(value) => setTitle(value)}
          value={title}
        />
        <FitInput
          label="Description"
          mode="outlined"
          onChangeText={(value) => setDescription(value)}
          value={description}
        />

        <FitButton
          style={styles().addButton}
          size="medium"
          onPress={savePlanChanges}
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

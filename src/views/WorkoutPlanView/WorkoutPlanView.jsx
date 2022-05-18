import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";
import WorkoutDay from "./components/WorkoutDay";

//formaty do dopracowania

const mockData = [
  {
    id: 1,
    name: "Klata, plecy, barki",
    day: "Monday",
    time: "05:30pm",
    exercises: [],
  },
  {
    id: 2,
    name: "Potężne nogi",
    day: "Wednesday",
    time: "05:30pm",
    exercises: [],
  },
  {
    id: 3,
    name: "Łapy",
    day: "Friday",
    time: "05:30pm",
    exercises: [],
  },
  {
    id: 4,
    name: "Klata, plecy, barki",
    day: "Monday",
    time: "05:30pm",
    exercises: [],
  },
  {
    id: 5,
    name: "Potężne nogi",
    day: "Wednesday",
    time: "05:30pm",
    exercises: [],
  },
  {
    id: 6,
    name: "Łapy",
    day: "Friday",
    time: "05:30pm",
    exercises: [],
  },
];

const WorkoutPlanView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();

  //TODO: inputs states or use formik
  //get real data

  return (
    <View style={styles(background).wrapper}>
      <ScrollView
        style={{
          flex: 1,
          width: "93%",
        }}
      >
        <FitInput style={styles().spacing} label="Title" mode="outlined" />
        <FitInput
          style={styles().spacing}
          label="Description"
          mode="outlined"
        />
        <View style={[styles().spacing, styles().buttonContainer]}>
          <FitButton
            style={{ marginRight: 5, flex: 1 }}
            onPress={() => navigation.navigate("WorkoutPreset")}
          >
            Choose Preset
          </FitButton>
          <FitButton
            style={{ marginLeft: 5, flex: 1 }}
            onPress={() => alert("TODO")}
          >
            Save
          </FitButton>
        </View>
        <View>
          <Text style={[styles().spacing, styles().title]}>Workout Plan</Text>
          {mockData.map((item) => (
            <WorkoutDay
              name={item.name}
              day={item.day}
              time={item.time}
              key={item.id}
            />
          ))}
        </View>
        <FitButton
          style={styles().addButton}
          size="medium"
          onPress={() => alert("TODO")}
        >
          ADD
        </FitButton>
      </ScrollView>
    </View>
  );
};

const styles = (background) =>
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

export default withTheme(WorkoutPlanView);

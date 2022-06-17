import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import { auth } from "../../../firebase.config";
import FitButton from "../../components/FitButton";
import ExerciseItem from "../DashboardView/components/ExerciseItem";

const DashboardView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        backgroundColor: background,
      }}
    >
      <View style={styles().container}>
        <Text style={[styles().spacing, styles().title]}>
          Your next workout day
        </Text>
        <View style={styles().workoutDay}>
          <Text style={styles().dayDate}>{"MON" + "\n" + 23}</Text>
          <View>
            {exerciseItems.map((item) => (
              <ExerciseItem
                key={item.id}
                name={item.name}
                weights={item.weights}
                sets={item.sets}
                reps={item.reps}
              />
            ))}
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <FitButton onPress={() => navigation.navigate("StartWorkout")}>Go next</FitButton>
        <Text>email: {auth.currentUser?.email || "NOT LOGGED IN"}</Text> */}
        <FitButton onPress={handleSignOut}>SignOut</FitButton>
      </View>
    </View>
  );
};

const styles = (background) =>
  StyleSheet.create({
    container: {
      padding: 16,
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: 16,
    },
    workoutDay: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
    },
    dayDate: {
      fontSize: 28,
      color: "green",
      borderColor: "green",
      borderRadius: 16,
      borderWidth: 3,
      padding: 10,
      marginTop: 10,
      marginRight: 20,
      textAlign: "center",
      fontWeight: "bold",
    },
  });

const exerciseItems = [
  { id: 0, name: "Squats", weights: 50, sets: 4, reps: 8 },
  { id: 1, name: "Leg press", weights: 80, sets: 4, reps: 12 },
  { id: 2, name: "Benchpress", weights: 90, sets: 4, reps: 8 },
  { id: 3, name: "Chest fly", weights: 12.5, sets: 4, reps: 8 },
];

export default withTheme(DashboardView);

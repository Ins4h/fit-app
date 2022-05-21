import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import { auth } from "../../../firebase.config";
import FitButton from "../../components/FitButton";
import ExerciseItem from "../DashboardView/components/ExerciseItem"

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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: background,
      }}
    >
      <View style={styles().container}>
        <Text style={[styles().spacing, styles().title]}>Your next workout day</Text>
        <View style={styles().workoutDay}>
          <Text style={styles().dayDate}>{"MON" + "\n" + 23}</Text>
          <View>
            {exerciseItems.map((item) => (
              <ExerciseItem
                name={item.name}
                weights={item.weights}
                sets={item.sets}
                reps={item.reps}
              />
           ))}
          </View>
        </View>
      </View>
      <FitButton onPress={() => navigation.navigate("StartWorkout")}>
        Go next
      </FitButton>
      <Text>email: {auth.currentUser?.email || "NOT LOGGED IN"}</Text>
      <FitButton onPress={handleSignOut}>SignOut</FitButton>
    </View>
  );
};

const styles = (background) =>
  StyleSheet.create({
    container: {
      width: "95%",
      flex: 1,
      height: 84,
      margin: 10,
      marginBottom: 360,
      paddingTop: 10,
      paddingLeft: 20,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: 6,
    },

    workoutDay: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "flex-start"
    },

    title: {
      fontSize: 20,
      textAlign: "center",
    },

    dayDate: {
      fontSize: 28,
      color: "green",
      borderColor:"green",
      borderRadius: 6,
      borderWidth:3,
      padding: 10,
      marginTop: 10,
      marginRight: 20,
      textAlign:"center",
      fontWeight: "bold"
    },
  });

  const exerciseItems = [
    { name: "Squats", weights: 50, sets: 4, reps: 8 },
    { name: "Leg press", weights: 80, sets: 4, reps: 12 },
    { name: "Benchpress", weights: 90, sets: 4, reps: 8 },
    { name: "Chest fly", weights: 12.5, sets: 4, reps: 8 },
  ]

export default withTheme(DashboardView);

import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyToggleButton from "./components/MyToggleButton";
import { withTheme } from "react-native-paper";

const AccountSetupView = ({
  theme: {
    colors: { background },
  },
}) => {
  const navigation = useNavigation();

  const add = (exercise) => {
    navigation.navigate("EditWorkout", { exercise: exercise })
  }

  return (
    <View style={styles(background).container}>
      <MyToggleButton name={"Bench press"} difficulty={"Hard"} onAdd={add}/>
      <MyToggleButton name={"Pull ups"} difficulty={"Hard"} onAdd={add}/>
      <MyToggleButton name={"Push ups"} difficulty={"Hard"} onAdd={add}/>
      <MyToggleButton name={"Yates rows"} difficulty={"Hard"} onAdd={add}/>
      <MyToggleButton name={"Deadlift classic"} difficulty={"Hard"} onAdd={add}/>
      <MyToggleButton name={"Deadlift sumo"} difficulty={"Hard"} onAdd={add}/>
    </View>
  );
};

const styles = (background) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    padding: 16,
  },
});

export default withTheme(AccountSetupView);

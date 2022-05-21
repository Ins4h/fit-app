import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, withTheme } from "react-native-paper";
import FitButton from "../../components/FitButton";
import FitInput from "../../components/FitInput";

const EditExerciseView = ({
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
          <FitInput 
            style={styles().spacing} 
            label="Title" 
            mode="outlined"
          />
          <FitInput
            style={styles().spacing}
            keyboardType="numeric"
            label="Weights"
            mode="outlined"
          />
          <FitInput
            style={styles().spacing}
            keyboardType="numeric"
            label="Sets"
            mode="outlined"
          />
          <FitInput
            style={styles().spacing}
            keyboardType="numeric"
            label="Reps"
            mode="outlined"
          />
          <FitInput
            style={styles().spacing}
            keyboardType="numeric" 
            label="Break"
            mode="outlined"
          />
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
  
  export default withTheme(EditExerciseView);
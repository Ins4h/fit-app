import { StyleSheet, View, Text } from "react-native";

const Separator = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>OR</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },

  text: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
});

export default Separator;

import { View, StyleSheet } from "react-native";
import LeftBiceps from "../icons/LeftBiceps";
import RightBiceps from "../icons/RightBiceps";

const Logo = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ marginRight: 30 }}>
        <RightBiceps width="133" height="133" />
      </View>
      <View style={{ marginLeft: 30 }}>
        <LeftBiceps width="133" height="133" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Logo;

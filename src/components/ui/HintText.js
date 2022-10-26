import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const HintText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default HintText;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.accent500,
  },
});

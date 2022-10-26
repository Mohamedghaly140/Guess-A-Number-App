import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    color: Colors.white,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});

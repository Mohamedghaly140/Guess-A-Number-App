import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";
import HintText from "./HintText";

const Card = ({ children, title }) => {
  return (
    <View style={styles.card}>
      {title && <HintText>{title}</HintText>}
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },
});

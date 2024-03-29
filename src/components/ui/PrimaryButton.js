import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 28,
    backgroundColor: Colors.primary500,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        <a href="https://linkedin.com/in/AVidhanR" target="_blank">
          AVidhanR
        </a>
      </Text>
    </View>
  );
};

export default App;

// adding styles
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  anchorText: {
    color: "purple",
    textDecorationLine: "none",
  },
});

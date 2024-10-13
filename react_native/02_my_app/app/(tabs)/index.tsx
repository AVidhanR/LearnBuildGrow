import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>App</Text>
    </View>
  );
};

export default App;

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
});

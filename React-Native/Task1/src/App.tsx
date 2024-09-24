import { SafeAreaView, StyleSheet } from "react-native";

const App = () => {

  return (
    <SafeAreaView style={styles.background}>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3b3b3b",
    flex: 1,
  },
});

export default App;

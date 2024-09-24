# Task 1

## Step 1: Setting up React Native

Set up your environment with this react-native guide:
[reactnative.dev](https://reactnative.dev/docs/set-up-your-environment?platform=ios&os=macos)

Get startet with your first React-native app with react-native guide:
[reactnative.dev](https://reactnative.dev/docs/getting-started-without-a-framework)\
**N.B. DONT USE EXPO**\
Follow the whole guide until you can start the app up and do some modifying

## Step 2: Clean up and ready for future tasks
After you have completed the above 2 guides with the enviroment setup and your first react-native project, clean up the App.tsx so its ready for the upcoming tasks.

Your App.tsx should look like this:

```js
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
    }
});

export default App;
```

> **SafeAreaView explained**\
SafeAreaView in React Native ensures content is displayed within the safe areas of a device, avoiding overlap with notches, status bars, or rounded corners.

Good job! Head back to the Learning doc.

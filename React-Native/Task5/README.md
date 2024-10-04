# Task 5: React Native navigation

Objective: Set up stack navigation using **@react-navigation/native** and navigate to a task's detail screen when a To-do item is pressed.

---
<br/>

## Step 1: Add react-navigation packages
Add the necessary packages

- Follow this installations guide: [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)
- Stop right before the section: **Wrapping your app in NavigationContainer**
- Add one more package:
```ts
yarn add @react-navigation/native-stack
```

---
<br/>

## Step 2: Set up Navigation in App.tsx
Edit **App.tsx** to add **NavigationContainer** and the stack navigator
- Import the libs at the top of the file:
```ts
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
```
- Create the stack navigator and makes changes to the App component return

```ts

//This line initializes the stack navigator.
const Stack = createStackNavigator();

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Overview" component={Overview} />
          <Stack.Screen name="TaskDetail" component={TaskDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};
```

**Code explained:**
- **createStackNavigator()** is a function from React Navigation that creates a stack-based navigation system. A "stack" means you can navigate from one screen to another and go back (like pages in a book).
- **NavigationContainer** component wraps the entire app to manage navigation state. It is necessary to use React Navigation, as it provides the navigation functionality across the app. 
- The Navigator component (**Stack.Navigator**) manages the stack of screens. It defines the routes and their configurations (e.g., which screen should appear when a specific route is navigated to).
- **Stack.Screen** defines a screen in the stack navigator. The name prop is the unique identifier for this screen, and the component prop specifies which component should render (in this case, the **Overview** screen).
- When the app starts, it renders the **Overview** screen by default (since it's the first screen in the Stack.Navigator)
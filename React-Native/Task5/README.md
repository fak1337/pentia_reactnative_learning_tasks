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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```
- Create the stack navigator and makes changes to the App component return

```ts

// This line initializes the stack navigator.
const Stack = createNativeStackNavigator();

const App = () => {

   // Default options for all screens under this navigator.
  const scrOptions = { 
    headerStyle: { backgroundColor: '#6200ee' },
    headerTitleStyle: { color: 'white'}, 
    headerBackTitleVisible: false,
    headerTintColor: 'white'
  }

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={scrOptions}>
          <Stack.Screen name="Overview" options={{ headerShown: false}} component={Overview} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  )
};
```

**Code explained:**
- **createStackNavigator()** is a function from React Navigation that creates a stack-based navigation system. A "stack" means you can navigate from one screen to another and go back (like pages in a book).
- **NavigationContainer** component wraps the entire app to manage navigation state. It is necessary to use React Navigation, as it provides the navigation functionality across the app. 
- The Navigator component (**Stack.Navigator**) manages the stack of screens. It defines the routes and their configurations (e.g., which screen should appear when a specific route is navigated to).
- **Stack.Screen** defines a screen in the stack navigator. The name prop is the unique identifier for this screen, and the component prop specifies which component should render (in this case, the **Overview** screen).
- **headerShown: false**: To keep the design of the **Overview** screen we remove the default navigtion header.
- When the app starts, it renders the **Overview** screen by default (since it's the first screen in the Stack.Navigator)

---
<br/>


## Step 3: Add a new screen - TaskDetails
You probably noticed that the code won’t run and a "wild red error" appears because we are trying to navigate to a component named TaskDetail that doesn't exist yet in our navigation stack. Let’s fix that by creating a new screen named TaskDetail.

- In the folder **screens**, add a new file: **taskdetails.tsx**
- Style and use whatever component you need to make the TaskDetails screen.
- Here is a skeleton to get you startet:

```ts
// Remember the imports at the top
const TaskDetails = ({ route }) => {

  // route.params is explained further down
  const { task } = route.params;

  return (
    // View goes here
  );
};

const styles = StyleSheet.create({
 // Styles goes here
});

export default TaskDetails;
```
**Code explained:**
- **route.params** In React Navigation, when you navigate between screens, each screen receives a route object. This route object contains information about the parameters passed when navigating to the screen.

---
<br/>

## Step 4: Update the Overview screen
Edit the file: **screens/overviews.tsx** and modify the **Overview** component props and **FlatList** item to navigate to the **TaskDetail** screen when a task is pressed:
- Firstly edit the **Overview** component props from this:
```ts
const Overview = () => {....}
```
- To this:
```ts
const Overview = ({ navigation }) => {....}
```
**Code explained:**
- **navigation prop**: In React Navigation, when you pass navigation in the props of the Overview component, you're enabling it to interact with the navigation system. It's like a tool that gives you access to methods such as navigate(), goBack(), and others, to control navigation behavior.

- Lastly edit the **Flatlist** item: **TaskItem** with a new prop: **onPress**. Add this:
```ts
onPressGoToDetails={()=>navigation.navigate("TaskDetails", {task: item})} 
```

---
<br/>

## Step 5: Update the TaskItem custom component
You are on your own in this last step!\
Lets edit our TaskItem custom component so it can use one more custom prop: **onPressGoToDetails**
- Edit the file: **components/TaskItem.tsx**
- Add the **onPressGoToDetails** prop
- Use the **Pressable** component as the parent instead of a basic **View** component and handle the **onPressGoToDetails** prop in it.

---
<br/>

Sourcecode for finale result:
[Source](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task5/src/)


---
<br/>

# End of task 5
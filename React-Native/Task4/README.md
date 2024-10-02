# Task 4: React Hooks

Through these tasks, you'll gradually learn how to load tasks from **AsyncStorage** when the app starts with **useEffect**, persist new tasks whenever they're added or removed, and manage this data globally using **useContext**. By the end, you'll have built a fully functional and persistent to-do app while deepening your understanding of how React hooks and local storage work together in a **React Native** environment.

Objective: Learn how to use two of the most important React hooks: **useEffect** and **useContext**, along with **AsyncStorage** a key-value storage system that helps persist data.

---
<br/>

## Step 1: Add your first package! 
Time to add your first package, **Async storage**.\
Follow this installations guide: [react-native-async-storage.github.io](https://react-native-async-storage.github.io/async-storage/docs/install/)

Remember to import AsyncStorage at the top of App.tsx:
```js
import AsyncStorage from '@react-native-async-storage/async-storage';
```
---
<br/>

## Step 2: Implement useEffect to Load Tasks from AsyncStorage
Use **useEffect** and **AsyncStorage** to load tasks when the app starts.

- When the app launches, load tasks from **AsyncStorage** and set them in the state.
- If there are no tasks stored, display the **"No tasks available"** message.

Hint: The following useEffect will only "run once" the app starts.
```js
useEffect(() => {

  // Load tasks from storage - function
  const loadTasks = async () => {
    // Get stored tasks from storage
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      // Set the state with the stored tasks
      setTasks(JSON.parse(storedTasks));
    }
  };

  // Call the above function
  loadTasks();

}, []);
```
---
<br/>

## Step 3: Save Tasks to AsyncStorage
Persist tasks to **AsyncStorage** whenever tasks are added or removed.

- Modify the existing functionality so that every time a new task is added or removed, the updated task list is saved to **AsyncStorage**.
- Use **useEffect** to detect changes in the tasks state and update **AsyncStorage**.

Hint: The following **useEffect** will "run" every time the **tasks** state changes, because this **useEffect** has **tasks** state as a dependency.
```js
useEffect(() => {

  // Save tasks into storage - function
  const saveTasks = async () => {
    // Everytime the tasks list is changed is saved to storage
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Call the above function
  saveTasks();

// Because this **useEffect** has **tasks** state as a dependency, it will "run" everytime the tasks list is changed
}, [tasks]);
```

---
<br/>

## Step 4: Clear All Tasks from AsyncStorage
Add a "Clear All" button to delete all tasks from the state and AsyncStorage.

- Implement a button that removes all tasks from both the tasks state and AsyncStorage.
- When pressed, the task list should be cleared and the "No tasks available" message should appear.
- The button should not be visible when there is no tasks

> No hints this time!

---

Check out the finale result for the above steps:
[Task 4, step 1 - 4: App.tsx](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task4/step1-4_src/App.tsx)

---
<br/>

## Step 5: Set Up useContext for Global Task Management with AsyncStorage
In this step, we will architect the app to handle multiple screens efficiently while leveraging useContext to provide seamless access to the task data across all components and screens, ensuring a consistent and scalable state management approach throughout the application.

---
### Step 5.1 : Project structure
We will split step 5 into smaller parts. First, let's change the overall project structure to accommodate our new architecture.

- Make new folders named **contexts** and **screens** in the main project folder
- In the new **contexts** folder, make a new file: **tasks.context.tsx**
  - This will contain our new tasks contexts, states and functions, but for now keep it empty.
- In the new **screens** folder, make a new file: **overview.tsx**
  - All the UI that are in App.tsx will be moved to this file, but for now keep it empty.

In the end you should have a project structure like below, keep in mind this are the source files for your project and I have not listet the overall react-native, native and other project files:
- Project
  - components
    - TaskItem.tsx
  - contexts
    - tasts.context.tsx
  - screens
    - overview.tsx
  - App.tsx

---
### Step 5.2 : Setting up the context
- Open the newly created context file: tasks.context.tsx
- Create the TaskContext Interface
  - You'll define an interface that represents how the task context should look. This is useful for TypeScript to know what kind of data to expect.

```ts
interface TaskContextInterface {
    tasks: string[]; // an array where each task is a string.
    addTask: (newTask: string) => void; // function: adds a new task to the list.
    removeTask: (taskToRemove: string) => void; // function: deletes a task from the list.
    clearTasks: () => void; // function: wipes out all tasks.
}
```

- Great! Now, let’s create the actual context using createContext.
```ts
const TaskContext = createContext<TaskContextInterface>({
    tasks: [],
    addTask: (newTask: string) => { },
    removeTask: (taskToRemove: string) => { },
    clearTasks: () => { },
});
```

- Now that we have the context, let's start managing the actual task data and functions. We'll use **useState** to keep track of tasks and **useEffect** to load and save them.
- Let’s create a TaskProvider component, which will hold the tasks data, functions and more.

```ts
export const TaskProvider = ({ children }) => {
  
  // Hint: some code from App.tsx will be copy pasted here

  return (
      <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks }}>
        {children}
      </TaskContext.Provider>
  );
};
```
 - In the return statement of the TaskProvider we pass the tasks and the functions (addTask, removeTask, clearTasks) as the context value. Now, any component inside this provider can access and manage the tasks.
 - Let’s make it easy to access the task data in any component by creating a custom hook.

```ts
export const useTasks = () => useContext(TaskContext);
```
- useContext allows you to easily access the task data and functions in your components. Instead of writing useContext(TaskContext) every time, you can just use this hook!
- Thats it, our context skeleton is ready with a interface, provider and a custom hook to call it.

- Its time to finish the newly created provider with the nessaarcy states and functions, "Fill in the blanks!".
```ts
export const TaskProvider = ({ children }) => {
  
  /**
   * Place the Tasks state and functions here
  */

  return (
      <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks }}>
        {children}
      </TaskContext.Provider>
  );
};
```

Check out the finale result for our context file:
[contexts/tasks.context.tsx](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task4/step5_src/contexts/tasks.context.tsx)

---
### Step 5.3 : Making our first screen file


---
### Step 5.4 : Changes to our TaskItem component

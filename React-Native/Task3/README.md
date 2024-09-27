# Task 3: State Management

In these tasks, you'll learn how to manage state in React Native by using the useState hook. You'll start by replacing hardcoded tasks with dynamic state, then implement functionality to add tasks from an input field and display them in a list. You'll also learn to clear the input after adding a task, mark tasks as "Done" by removing them from the list.

Objective: Learn how to use the useState hook and see “state management” in action.

> You will have to do many things yourself in this task, there will be many hints, but in this section i want you to do a little digging if you are stuck or as always you can look at the source code for this task. GL HF!

---
<br/>

## Step 1: Add State to store tasks
Use React's **useState** hook to store and display tasks dynamically.

- Initialize an empty array of tasks using **useState**.
- Display the tasks from the state instead of the hardcoded values and components in **ScrollView**.
- Use **Flatlist** instead of **ScrollView**

Hint:
```js
const [tasks, setTasks] = useState<string[]>([]); 
```
---
<br/>

## Step 2: Add State to store new task
Implement functionality to add new tasks using the input field and update the state.

- Capture the text from the TextInput using another state variable.
- On pressing the "Add" button, append the new task to the list of tasks.
- Ensure that the new task is displayed in the task list after adding.

Hint:
```js
const [newTask, setNewTask] = useState<string>('');
```
Use setTasks([...tasks, newTask]) in the button’s onPress function.

---
<br/>

## Step 3: Clear Input Field after adding Task
Clear the input field after the user adds a new task.

- After pressing the "Add" button, ensure the TextInput field is cleared.

Hint:
```js
setNewTask(''); 
```

---
<br/>

## Step 4: Mark a Task as done
Implement the "Done" button for each task to remove the task from the list.

- Modify the TaskItem component to accept a function that removes a task when the "Done" button is pressed.
- Pass a function as prop to TaskItem from the App component that removes the corresponding task from the state.

Hint: Use filter to remove the task:
```js
setTasks(tasks.filter(task => task !== title));
```

---
<br/>

## Step 5: Show a message when no tasks are available
Display a message like "No tasks available" when the task list is empty.

- If the tasks state is an empty array, show a **Text** component with a message instead of the **Flatlist**.
- Style the message so its centered, has top margin and its easy to spot.

Hint:
```js
{
    tasks.length === 0 ? (
        /** Show message */
    ) : (
        /** List tasks */
    )
}
```
---
<br/>

**Check out the finale result for Task 3:**\
[Task 3 App.tsx](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task3/src/App.tsx)\
[Task 3 TaskItems.tsx](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task3/src/components/TaskItem.tsx)

---
<br/>

# End of task 3
# Task 2: Components (and styling)

Build a Simple UI for the To-Do app

Objective: Practise using core components and custom components to build a simple UI.

> Some steps i will go into details and make the code for you and others you have to make it yourself.

## Step 1: Building the basic UI
For a simple To-Do app we will need a header, input field, button and a list of tasks.\
In this step we wont be using custom components or a FlatList component.\
In the begining i will be explaining step by step whats going on, until you get more and more familiere with the basic components and styles.

### In the end, your app should look like this:

![Simple TO-DO app UI](https://i.ibb.co/Sd2dLGm/Simulator-Screenshot-i-Phone-15-2024-09-25-at-09-44-41.png)

> Check the source folder of this task to see the complete and finale code, but firstly try to follow the below steps the best you can.

---
### Step 1.1: Header
Lets make our header.\
Remember to put all the components that we add from now on in the SafeAreaView:
```js
<SafeAreaView>
    PUT EVERYTHING HERE FOR NOW
</SafeAreaView>
```

**NOTE: When adding components to your code there will be a redline under it, just add the correct imports at top of your file, like this:**
```js
import { /** ...Other imports*/ Text, View } from "react-native"
```

Our header code
```js
<View style={{padding: 20,backgroundColor: '#6200ee',alignItems: 'center',marginBottom: 10,}} >
    <Text style={{fontSize: 24,color: '#fff',fontWeight: 'bold',}}>To-Do App</Text>
</View >
```
**code explained:**\
This code creates a box with a title for a "To-Do App".

- The **View** is like a container that holds other things (like text or buttons).
- The **Text** inside the View displays the "To-Do App" title.

For the styles we use inline-styling now, for both components View and Text:
- **Padding** adds space inside the container.
- **Background** color makes the box purple.
- **Align items** centers the text inside the box.
- **Text styles** make the title bigger, white, and bold.

So, this code creates a purple box with centered, large, bold, white text that says "To-Do App".

---
### Step 1.2: "Add task" area
Next we will be adding a input field and a button for the part to add new tasks.
Put this code after our header code.
```js
<View style={{ flexDirection: 'row', marginBottom: 10, marginHorizontal: 16 }}>
    <TextInput
        style={{ flex: 1, borderWidth: 1, borderRadius: 6, padding: 10, backgroundColor: '#fff' }}
        placeholder="Enter a new task..."
        placeholderTextColor="#aaa"
    />
    <Button title="Add" onPress={() => { console.log('Add button pressed') }} />
</View >
```
**code explained:**\
This code creates a row with a text input and an "Add" button.

- The **View** is like a container that holds the text input and button side by side.
- The **TextInput** is where you can type a new task.
- The **Button** next to it lets you add the task when pressed.

For the styles:

- **flexDirection** makes the text input and button sit next to each other in a row.
- **margin** adds space around the container.
- The **TextInpu**t is stretched to take most of the space, with a white background, rounded corners, and padding inside.
- The **Button** displays "Add" and logs a message to the console when clicked.

---
### Step 1.3: Simple seperator (Your turn!)
- Use a View component
- Style the View component with a height and a background color same as the header

---
### Step 1.4: The Task list (Your turn!)
In the beginning we will start very simple, lets start by making the Task item.
- Make a "parent" view for the Task item
    - Give the parent view whatever styling you want but be sure to add **flexDirection: 'row'**
    - The **flexDirection: 'row'** will align all child components in a horizontal row 
- In the parent view add a View component that wraps a Text component
    - You decide what Text will be in the Text component, it doesn't really matter at this point.
- In the parent view add a Button component into parent View
    - Add the title prop with the string "Done"
- C/P the whole **Task item** a couple of times
- Wrap all the **Task items** you just made in a **ScrollView**
- Give the ScrollView a style **flex: 1** so it fills the rest of the screen.

---
### Extra
Feel free to play around and style the components as you see fit.

---
### Ending notes
**Your code base should look something like this:**
[Step 1 sourcecode](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task2/step1_src/App.tsx)

---

## Step 2: Stylesheet

Lets take a look at how we can make the styling code a little prettier.
Inline styling as we are using right now is just ugly and can make the code clutter.
Rule of thumb is that if your inline styling has 3 or more styles in it, put it in a stylesheet.

In our App.tsx files we have a **style object** called **styles** and as you can see our SafeAreaView has a style that referes to that style object. Now lets use that in all our components.

This is how you can make the Header area code more "compact" and awesome, by removing the inline styling and putting it in the StyleSheet.create.

The Header views:
```js
<View style={styles.headerContainer}>
    <Text style={styles.headerText}>To-Do App</Text>
</View>
```

The style object:
```js
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#3b3b3b",
        flex: 1,
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#6200ee',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: { 
        fontSize: 24, 
        color: '#fff', 
        fontWeight: 'bold'
    }
});
```

Your tasks are as follows, clean up the styling code like above for the:
- Header area
- "Add task" area
- Seperator
- Task list (Scrollview)
- Task items

---
**Your code base should look something like this:**
[Step 2 sourcecode](https://github.com/fak1337/pentia_mobile_learning_tasks/blob/main/React-Native/Task2/step2_src/App.tsx)


---

## Step 3: Custom components
Time to make our first custom component. Lets get into it straight away!

### Step 3.1: Project structur

Firstly lets make some changes to our project structur

- Make a new Folder in the main project folder: **components**
    - This is the folder that vil contain all the custom components
- Make a new file in the **components** folder: **TaskItem.tsx**
    - This is the custom component file for the Task Items

### Step 3.2: The custom component

So if you look at our source code in the App.tsx, specially where the task items are, its just c/p and if we had 100 of task items, the code base will be VERY LONG.
There are of course lots of ways to do the listing code, but i just want to give you a very basic understanding of custom components and how we can minimize our code.

Go ahead and open the file **TaskItem.tsx** and add the following code:

```js
export const TaskItem = (props) => {
    /** This is where the components logic will be */
    return (
        /** This is where the components views will be */
    )
}

const styles = StyleSheet.create({
   /** This is where the components styles will be */
})
```
**code explained:**
- **TaskItem:** Its a functional component called TaskItem. It accepts props, which is how data can be passed into the component from a parent.
- **return (...)** Inside this part, you will define what the visual structure (views) of your component looks like using JSX (e.g., <View>, <Text>, etc.).

It's currently just a skeleton, waiting for logic, views, and styles to be filled in.

**Your task is now to fill in the blanks in our "skeleton" component file:**
- Go back into the App.tsx file
- Simply c/p a single set of Task item components into the new component file's return (...)
- Take all the related styles and put into the StyleSheet.create.


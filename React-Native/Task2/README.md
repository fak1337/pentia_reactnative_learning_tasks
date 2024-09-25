# Task 2

Build a Simple UI for the To-Do app

Objective: Practise using core components and custom components to build a simple UI.\

> Some steps i will go into details and make the code for you and others you have to make it yourself.

## Step 1: Building the UI
For a simple To-Do app we will need a header, input field, button and a list of tasks.\
In this step we wont be using custom components or a FlatList component.\
In the begining i will be explaining step by step whats going on, until you get more and more familiere with the basic components and styles.

### In the end, your app should look like this:

![Simple TO-DO app UI](https://i.ibb.co/Sd2dLGm/Simulator-Screenshot-i-Phone-15-2024-09-25-at-09-44-41.png)

### Header
Lets make our header.\
Remember to put all the components that we add from now on in the SafeAreaView:
```js
<SafeAreaView>
    PUT EVERYTHING HERE FOR NOW
</SafeAreaView>
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

### Add task area
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

The View is like a container that holds the text input and button side by side. The TextInput is where you can type a new task. The Button next to it lets you add the task when pressed.

For the styles:

- **flexDirection** makes the text input and button sit next to each other in a row.
- **margin** adds space around the container.
- The **TextInp**ut is stretched to take most of the space, with a white background, rounded corners, and padding inside.
- The **Button** displays "Add" and logs a message to the console when clicked.


### Simple seperator (Your turn!)
- Use a View component
- Style the View component with a height and a backgroundcolor same as the header



Check the source folder of this task to see the complete and finale code, but try to make it yourself first.
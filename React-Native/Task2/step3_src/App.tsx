import React from 'react';
import { Text, View, TextInput, Button, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { TaskItem } from './components/TaskItem';


const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer} >
        <Text style={styles.headerText}>To-Do App</Text>
      </View >

      {/* Input field */}
      <View style={styles.inputContainer} >
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#aaa"
        />
        <Button title="Add" onPress={() => {
          console.log('Add button pressed')
        }} />
      </View >

      {/* Simple seperator */}
      <View style={styles.seperator} />

      {/* Task List */}
      <ScrollView style={styles.tasksContainer} >

        {/* Task item */}
        <TaskItem title={"Do 20 push-ups"} />
        <TaskItem title={"Remember my meds"}/>
        <TaskItem title={"Meditation 10min"}/>
        <TaskItem title={"Eat cake"}/>
        <TaskItem title={"Be awesome today"}/>

      </ScrollView >
    </SafeAreaView>
  )
}

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
    fontWeight: 'bold',
  },
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
  tasksContainer: {
    paddingTop: 10,
  },
 
});

export default App;

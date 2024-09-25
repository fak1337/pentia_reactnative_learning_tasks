import React from 'react';
import { Text, View, TextInput, Button, ScrollView, StyleSheet, SafeAreaView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header} >
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
          <View style={styles.task}>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>This is a task to complete</Text>
            </View>
            <Button title="Done" onPress={() => { }} />
          </View>

          {/* Task item */}
          <View style={styles.task}>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>Another task to complete</Text>
            </View>
            <Button title="Done" onPress={() => { }} />
          </View>

          {/* Task item */}
          <View style={styles.task}>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>One more task to complete</Text>
            </View>
            <Button title="Done" onPress={() => { }} />
          </View>

        </ScrollView >
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3b3b3b",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#3b3b3b",
  },
  seperator: {
    height: 6,
    backgroundColor: '#6200ee',
  },
  header: {
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
  task: {
    backgroundColor: '#f9f9f9',
    padding: 8,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    marginHorizontal: 16
  },
  taskTextContainer: {
    flex: 1,
    justifyContent: 'center'  
  },
  taskText: {
    fontSize: 17,
  },
});

export default App;

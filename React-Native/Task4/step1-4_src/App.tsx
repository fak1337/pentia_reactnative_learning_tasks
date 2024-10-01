import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskItem } from './components/TaskItem';

const App = () => {

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  /* Load tasks from storage */
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);

  /* Save tasks to storage */
  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };
    saveTasks();
  }, [tasks]);

  /* Clear all tasks */
  const clearTasks = async () => {
    setTasks([]);
  };


  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.headerContainer} >
        <Text style={styles.headerText}>To-Do App</Text>
      </View >

      {/* Input field */}
      <View style={styles.inputContainer} >
        <TextInput
          value={newTask}
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#aaa"
          onChangeText={text => setNewTask(text)}
        />
        <Button title="Add" onPress={() => {
          setTasks([...tasks, newTask]);
          setNewTask('');
        }} />
      </View >

      {/* Simple seperator */}
      <View style={styles.seperator} />

      {/* Task List */}
      {
        tasks.length === 0 ? (
          <Text style={styles.errorNoTasks}>No tasks available</Text>
        ) : (
          <FlatList
            style={styles.tasksContainer}
            data={tasks}
            renderItem={({ item }) => <TaskItem title={item} onPress={() => {
              setTasks(tasks.filter(task => task !== item));
            }} />}
          />
        )
      }

      {/* Clear Button */}
      {
        tasks.length > 0 && (
          <Button title="Clear All Tasks" onPress={clearTasks} />
        )
      }

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
  errorNoTasks: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  }
});

export default App;

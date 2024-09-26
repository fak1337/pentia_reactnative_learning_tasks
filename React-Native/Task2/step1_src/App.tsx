import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      
      {/* Header */}
      <View style={{ padding: 20, backgroundColor: '#6200ee', alignItems: 'center', marginBottom: 10, }} >
        <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', }}>To-Do App</Text>
      </View >
      
      {/* "Add task" area */}
      <View style={{ flexDirection: 'row', marginBottom: 10, marginHorizontal: 16 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderRadius: 6, padding: 10, backgroundColor: '#fff' }}
          placeholder="Enter a new task..."
          placeholderTextColor="#aaa"
        />
        <Button title="Add" onPress={() => { console.log('Add button pressed') }} />
      </View >
      
      {/* Seperator */}
      <View style={{ height: 6, backgroundColor: '#6200ee', }} />

      {/* Task List */}
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        
        {/* Task item */}
        <View style={{ backgroundColor: '#f9f9f9', padding: 8, marginBottom: 10, borderRadius: 12, borderWidth: 1, borderColor: '#ddd', flexDirection: 'row', marginHorizontal: 16 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17 }}>This is a task to complete</Text>
          </View>
          <Button title="Done" onPress={() => { }} />
        </View>
        
        {/* Task item */}
        <View style={{ backgroundColor: '#f9f9f9', padding: 8, marginBottom: 10, borderRadius: 12, borderWidth: 1, borderColor: '#ddd', flexDirection: 'row', marginHorizontal: 16 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17 }}>This is a task to complete</Text>
          </View>
          <Button title="Done" onPress={() => { }} />
        </View>
        
        {/* Task item */}
        <View style={{ backgroundColor: '#f9f9f9', padding: 8, marginBottom: 10, borderRadius: 12, borderWidth: 1, borderColor: '#ddd', flexDirection: 'row', marginHorizontal: 16 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17 }}>This is a task to complete</Text>
          </View>
          <Button title="Done" onPress={() => { }} />
        </View>

      </ScrollView>

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
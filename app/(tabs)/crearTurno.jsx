import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = () => {
    if (taskInput.trim() !== '') {
      addTask({ id: Date.now(), text: taskInput });
      setTaskInput('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Task"
        value={taskInput}
        onChangeText={setTaskInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default TaskForm;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <View>
      {tasks.map(task => (
        <View key={task.id} style={styles.taskItem}>
          <Text>{task.text}</Text>
          <TouchableOpacity onPress={() => deleteTask(task.id)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

export default TaskList;

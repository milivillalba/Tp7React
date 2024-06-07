import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const TaskList = ({ tasks, deleteTask }) => {
  console.log("Tareas recibidas en TaskList:", tasks); // Agrega un console.log para verificar las tareas recibidas

  return (
    <View style={styles.listContainer}>
      {/* Utilizando FlatList para renderizar las tareas */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.taskItem}>
            <Text style={styles.taskText}>Nombre: {item.name}</Text>
            <Text style={styles.taskText}>Tipo de Nails: {item.nailType}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  taskItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default TaskList;

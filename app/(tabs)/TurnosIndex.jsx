import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import TaskForm from './crearTurno';
import TaskList from './turnoLista';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {/* Botón flotante para agregar tareas */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => addTask({ id: Date.now(), text: 'Nuevo Turno' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#007bff', // Color del botón flotante
  },
});

export default TaskManager;

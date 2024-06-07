import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import TaskForm from './crearTurno';
import TaskList from './turnoLista';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  // Crear una tarea 
  const addTask = task => {
    setTasks([...tasks, task]);
    setFormVisible(false); // Ocultar el formulario después de agregar la tarea
  };

  // Eliminar tarea
  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <TaskList tasks={tasks} deleteTask={deleteTask} />

        {/* Modal para el formulario de creación de tareas */}
        <Portal>
          <Modal 
            visible={isFormVisible} 
            onDismiss={() => setFormVisible(false)} 
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <TaskForm addTask={addTask} />
            </View>
          </Modal>
        </Portal>

        {/* Botón flotante para agregar tareas */}
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => setFormVisible(true)} // Mostrar el formulario al presionar el FAB
        />
      </View>
    </Provider>
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
    backgroundColor: '#ff8cd6', // Color del botón flotante
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default TaskManager;

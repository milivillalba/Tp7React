import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [name, setName] = useState('');
  const [nailType, setNailType] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log("handleSubmit called, addTask is:", addTask);
    if (name.trim() !== '' && nailType.trim() !== '' && date.trim() !== '') {
      addTask({ id: Date.now(), name, nailType, date });
      setTaskInput('');
      setName('');
      setNailType('');
      setDate('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        label="Ingrese Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        label="Ingrese tipo de Nails"
        value={nailType}
        onChangeText={setNailType}
      />
      <TextInput
        style={styles.input}
        label="Ingrese la Fecha"
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity>
        <Button icon="heart" mode="contained" onPress={handleSubmit} style={styles.buttonText}>Agregar Turno</Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    color:'#000',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    backgroundColor:'#ff8cd6',
  },
});

export default TaskForm;

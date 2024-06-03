import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Login = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Si todavía no tienes una cuenta, ¿qué esperas? ¡Regístrate ahora!</Text>
        <TextInput
          placeholder="Ingrese su Email!"
          style={styles.input}
        />
        <TextInput
          placeholder="Ingrese su Contraseña!"
          style={styles.input}
          secureTextEntry
        />
        <StatusBar style="auto" />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  }
});

export default Login;

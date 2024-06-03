import { StatusBar } from "expo-status-bar";
import React ,{useState} from "react";
import { TextInput , Button} from 'react-native-paper';
import { StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async() => {
    
    try {
      // Guardar los datos en AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));

      // Redirigir al usuario a otra pantalla, por ejemplo, la pantalla de inicio de sesión.
      navigation.navigate("Login");
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register💗</Text>
        <Text style={styles.subtitle}>Si todavía no tienes una cuenta, ¿qué esperas? ¡Regístrate ahora!</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}  
    
        />
        <TextInput
           label="Password"
           value={password}
           onChangeText={text => setPassword(text)}
           style={styles.input}
           secureTextEntry
        />
          <Button icon="heart" mode="contained" onPress={handleRegister} style={styles.Button}>
               Registrar
         </Button>
         
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
    width: '70%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  Button:{
    width:'50%',
    backgroundColor: '#ff8cd6'
  }
});

export default Register;

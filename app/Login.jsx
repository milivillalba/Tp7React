import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput , Button} from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const Login = () => {
  const [Email, setEmail] = React.useState({Email:''});
  const [Password, setPassword] = React.useState({Password:''})
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login💗</Text>
        <Text style={styles.subtitle}>Si ya tienes una cuenta, inicia sesión en nuestra app. ¿Qué esperas?</Text>
        <TextInput
          label="Email"
          value={Email}
          onChangeText={e => setEmail(e)}
          style={styles.input}
    
        />
        <TextInput
           label="Password"
           value={Password}
           onChangeText={e => setPassword(e)}
           style={styles.input}
        />
          <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={styles.Button}>
               Iniciar Seccion
         </Button>
         
        <StatusBar style="auto"/>
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

export default Login;

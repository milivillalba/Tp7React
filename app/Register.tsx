import { StatusBar } from "expo-status-bar";
import React ,{useState} from "react";
import { TextInput , Button} from 'react-native-paper';
import { StyleSheet, View, Text,Alert} from 'react-native';
import { useRouter, Stack } from "expo-router";




const Register = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //declaro estos estado para que se guarden los errores
  const [ErrorUser, setErrorUser] = useState("");
  const [ErrorPass, setErrorPass] = useState("");
  //utilo router para navegar entre pantallas luego de registrarse

  const router= useRouter();

  //Manejor de errores para el nombre de usuario
  const ValidarUser=(Username: string) =>{
    return Username.length >=5 && Username.length <=10;
  }
  //Manejar errores para la contraseña
  const ValidarPass = (password: string)=>{
    const valdarCaracter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{5,}$/;
    return valdarCaracter.test(password)
  }

  const handleRegister = () => {
    //creo una variable para validar si los datos que ingresan cumple con las validaciones y asi puedo manejar si puede o no inicar seccion.
     let InicioValido = true;

     //validar el nombre de usuario
     if(!ValidarUser(Username)){
      //si el nombre de usuario no es valido se mostrar este mensaje
       Alert.alert('El nombre de usuario debe contener letras y números, por favor recuérdelo.')
       setErrorUser('El nombre de usuario que ingreso es invalido')
       //se marva el inicio como falso para que no ingrese
       InicioValido= false
     }else{
      //si el nombre que ingreso es valido se elimina el mensaje de error que se agrego anteriormente
      Alert.alert('Recuerde que su contraseña no debe tener menos de 5 caracteres.Debe contener al menos una letra mayúscula, una letra minúscula y un símbolo.😊')
      setErrorUser('')
     }

     //Validar contraseña
     if(!ValidarPass(password)){
      //si la contraseña no es valida se muestra un mensaje de error
      setErrorPass('La contraseña es invalida y no cumple con los caracteres mencionados')
      InicioValido= false;
     }else{
      //si la contraseña es valida se elimina el mensaje d eerror 
      setErrorPass('')
     }

     //Una ves que se valide la contraseña y el usuario y cumple con la validacion se navega a la pagina de tareas en mi caso
     if(InicioValido){
      router.replace('/Bienvenido')
     }
   
  };
    return (
      <>
       {/* Define la pantalla del Stack con opciones de título */}
         <Stack.Screen options={{title:'Regi'}}/>

        <View style={styles.container}>
          <Text style={styles.title}>Inicia Sesión💗</Text>
          <Text style={styles.subtitle}>Registra tus datos he ingresa ahora!</Text>
          {/*Input para Usuario*/}
          <TextInput
            label="Username"
            value={Username}
            onChangeText={setUsername}
            style={styles.input}  
      
          />
          {/* Renderiza un mensaje de error si existe un error en el nombre de usuario */}
          {ErrorUser ? <Text style={styles.errorText}>{ErrorUser}</Text> : null}
          {/*Input para contraseña*/}
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
            {/* Renderiza un mensaje de error si existe un error en la contraseña */}
           {ErrorPass ? <Text style={styles.errorText}>{ErrorPass}</Text> : null}

           {/*Boton de ingresar */}
            <Button icon="heart" mode="contained" onPress={handleRegister} style={styles.Button}>
                Ingresar
          </Button>
          
          <StatusBar style="auto" />
        </View>
      </>
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
  },
  errorText:{
    color:'#ccc'
  }

});

export default Register;

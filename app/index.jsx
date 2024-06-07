import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../assets/images/bratz-logo.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Studio las Bratz</Text>
      <View style={styles.bottomContainer}>
        <Text variant="displayMedium" style={styles.description}>
          Ingresa y agenda tu turno ¿Que esperas?
        </Text>
        <View style={styles.buttonsContainer}>
          <Link href="/Register" style={[styles.button, styles.registerButton]}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </Link>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
   
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center'
    
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff8cd6',
  },
  buttonText: {
    color: '#ff8cd6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;

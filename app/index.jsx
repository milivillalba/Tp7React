import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/bratz-logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Studio las Bratz</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonsContainer}>
        <Link href="/Login" style={[styles.button, styles.signInButton]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Link>
        <Link href="/Register" style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>Register</Text>
        </Link>
      </View>
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
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
  },
  signInButton: {
    backgroundColor: '#ffffff',
  },
  registerButton: {
    backgroundColor: '#ff8cd6',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;

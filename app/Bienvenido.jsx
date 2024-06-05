import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Stack, useRouter } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function WelcomeScreen() {
  const navigation = useRouter();

  const handleGetStarted = () => {
    navigation.push('/TurnosIndex'); 
  };
  const salirButon = ()=>{
    navigation.push('/'); 
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false}} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/21/3b/14/213b1471fc2940df2f6183872d80c19d.jpg' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>¡Bienvenido a Studio Las Bratz💗!</Text>
          <Text style={styles.subtitle}>Organiza tus turnos de uñas de manera eficiente y efectiva.</Text>
          <Button mode="contained" onPress={handleGetStarted} style={styles.button}>
            Comenzar
          </Button>
          <Button mode="contained" onPress={salirButon} style={styles.button}>
            Salir
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  logo: {
    width: scale(150),
    height: verticalScale(150),
    borderRadius: moderateScale(75),
  },
  contentContainer: {
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: '#ff8cd6',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    marginVertical: verticalScale(10),
  },
});

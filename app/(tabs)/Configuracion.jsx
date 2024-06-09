import React, { useState } from 'react';
import { Drawer, Switch, Button } from 'react-native-paper';
import { View } from 'react-native'; 
import { useRouter } from 'expo-router';

const ConfiguracionDrawer = ({ changeBackgroundColor, closeConfigPortal }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const router = useRouter();
  
    const toggleTheme = () => {
      const newTheme = !isDarkTheme;
      setIsDarkTheme(newTheme);
      const newColor = newTheme ? '#000' : '#fff';
      console.log('Nuevo color de fondo:', newColor);
      changeBackgroundColor(newColor);
      closeConfigPortal();
    };
  
    const goToHomeScreen = () => {
      router.push('/');
      closeConfigPortal();
    };
  
    const closeConfig = () => {
      closeConfigPortal();
    };
  
    return (
      <Drawer.Section title="Configuración">
        <Drawer.Item
          label="Tema oscuro"
          right={() => <Switch value={isDarkTheme} onValueChange={toggleTheme} />}
        />
        <Drawer.Item
          label="Salir a inicio"
          onPress={goToHomeScreen}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Button onPress={closeConfig}>Cerrar</Button>
        </View>
      </Drawer.Section>
    );
  };
  
export default ConfiguracionDrawer;
  


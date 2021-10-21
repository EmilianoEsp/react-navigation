import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaCuenta from './screens/PantallaCuenta';
import PantallaApuntes from './screens/PantallaApuntes';
import PantallaDonaciones from './screens/PantallaDonaciones';
import PantallaCarrito from './screens/PantallaCarrito';

const Stack = createStackNavigator(); 

// npm install @react-navigation/stack@^5.x
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cuenta"
            component={PantallaCuenta}
          />
          <Stack.Screen
            name="Apuntes"
            component={PantallaApuntes}
          />
          <Stack.Screen
            name="Donaciones"
            component={PantallaDonaciones}
          />
          <Stack.Screen
            name="Carrito"
            component={PantallaCarrito}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
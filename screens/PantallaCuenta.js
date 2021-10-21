import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class PantallaCuenta extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Pantalla de la cuenta</Text>
          <Button
          title="Ir a donaciones"
          onPress={() =>
            this.props.navigation.navigate('Donaciones')
          }
        />
        </View>
      );
    }
  }
  
  export default PantallaCuenta;
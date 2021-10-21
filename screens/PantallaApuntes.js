import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class PantallaApuntes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pantalla apuntes</Text>
        <Button
          title="Regresar a inicio"
          onPress={() =>
            this.props.navigation.navigate('Cuenta')
          }
        />
      </View>
    );
  }
}

export default PantallaApuntes;
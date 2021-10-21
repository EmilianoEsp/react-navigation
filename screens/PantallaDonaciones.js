import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class PantallaDonaciones extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pantalla donaciones</Text>
        <Button
          title="Regresar a inicio"
          onPress={() =>
            this.props.navigate('Cuenta')
          }
        />
      </View>
    );
  }
}

export default PantallaDonaciones;
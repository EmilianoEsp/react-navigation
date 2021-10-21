import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class PantallaCarrito extends React.Component {
    render(){
        return(
            <View>
                <Text>Pantalla carrito</Text>
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

export default PantallaCarrito;
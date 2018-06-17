import React from 'react';
import { StyleSheet, Text } from 'react-native';

class MeuComponente extends React.Component {
  render() {
    return (
        <Text style={{color: 'black', fontWeight: 'bold'}}>{this.props.texto}</Text>
    );
  }
}

export default MeuComponente

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

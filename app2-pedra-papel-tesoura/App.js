import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {escolhaUsuario : undefined, escolhaComputador : '', resultado : ''}
}
jokenpo(escolhaUser){
  pc = Math.floor(Math.random() * 3)

  let epc = undefined

  switch (pc){
    case 0:
    epc = 'Pedra'
    break
    case 1:
    epc = 'Papel'
    break
    case 2:
    epc = 'Tesoura'
    break
  }

  let resultado = ''
  if(epc == 'Pedra'){
    if(escolhaUser == 'pedra' ){ resultado = "Empate!" }
    if(escolhaUser == 'papel' ){ resultado = "Usuário ganhou!" }
    else{{ resultado = "Computador ganhou!" }}
  }

  if(epc == 'Papel'){
    if(escolhaUser == 'pedra' ){ resultado = "Computador ganhou!" }
    if(escolhaUser == 'papel' ){ resultado = "Empate!" }
    else{{ resultado = "Usuário ganhou!" }}
  }

  if(epc == 'Tesoura'){
    if(escolhaUser == 'pedra' ){ resultado = "Usuário ganhou!" }
    if(escolhaUser == 'papel' ){ resultado = "Computador ganhou!" }
    else{{ resultado = "Empate!" }}
  }

  this.setState({ escolhaUsuario : escolhaUser, escolhaComputador : epc, resultado: resultado })

}

  render() {
    return (
      <View style={styles.container}>
        <Text>Escolha do computador: {this.state.escolhaComputador} </Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario} </Text>
        <Text>Resultado: {this.state.resultado} </Text>
        <Button title="pedra" onPress={ () => {this.jokenpo('pedra')}} />
        <Button title="papel" onPress={ () => {this.jokenpo('papel')}} />
        <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')}} />
      </View>
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

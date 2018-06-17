import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  render() {


    const numeroAleatorio = () => {
      let numero = Math.random()
      numero = Math.floor(numero * 5)
      let frases = Array
      frases[0] = 'Se hoje fosse o último dia de minha vida, queria fazer o que vou fazer hoje? E se a resposta fosse "Não" muitos dias seguidos, sabia que precisava mudar algo.'
      frases[1] = 'Não faz sentido olhar para trás e pensar: devia ter feito isso ou aquilo, devia ter estado lá. Isso não importa. Vamos inventar o amanhã, e parar de nos preocupar com o passado.'
      frases[2] = 'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.'
      frases[3] = 'As pessoas não sabem o que querem, até mostrarmos a elas.'
      frases[4] = 'Foco é dizer não.'
      


      alert(frases[numero])
    }

    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} />
        <TouchableOpacity style={styles.botao} onPress={numeroAleatorio}> 
        
        <Text style={styles.textBotao}>Nova Frase</Text>
        
        </TouchableOpacity>
      </View>
    );
  }
}
// <View styles={styles.newContent}> </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao:{
    marginTop: '10%',
    backgroundColor: '#538539',
    borderRadius: 3,
    elevation: 2,
    paddingVertical: 10, // x
    paddingHorizontal: 40, // y
  },
  textBotao:{
    color: 'white',
    alignSelf: 'center',
  }
});

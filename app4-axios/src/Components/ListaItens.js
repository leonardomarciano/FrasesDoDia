import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Itens from './Itens'
import axios from 'axios'


export default class ListaItens extends Component {
  constructor(props){
    super(props)

    this.state =  { listaItens : [] }
  }

  componentWillMount(){
    const api =  'http://faus.com.br/recursos/c/dmairr/api/itens.html'

    axios.get(api)
      .then(response => {
      alert( this.setState({ listaItens: response.data }))
      })
      .catch( err => {alert("Deu ruin" + err)} )
  }
  render() {
    return (
      <View>
          <ScrollView>
        {
          this.state.listaItens.map( item => ( <Itens key={item.titulo } item={item} />  ) )
        }
        </ScrollView>
      </View>
    );
  }
}

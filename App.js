/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {Button, TextInput, View, Text, FlatList} from 'react-native';
 
const style = {
  borderColor: '#000000',
  borderWidth: 1
}


 
 const App = () => {
   const [Ncuenta, setNcuenta] = useState();
   const [Nphone, setNphone]= useState();
   const [Nhobby, setHobby] = useState();
   const [Ffood, setCfavorita] = useState();
   const [Ciudad, setCiudad] = useState();
   const [Datos, setDatos] = useState();

  const getData = () => {
    fetch('https://calculadora-server.herokuapp.com/alumns')
  .then(response=>response.json())
  .then((data) => {
    setDatos(data);
  })
  }


    const hacerFetch = () => {
     
      const url = 'https://calculadora-server.herokuapp.com/alumns'
      const body = {
        accountNumber : parseInt(Ncuenta),
        phone: parseInt(Nphone),
        hobby: Nhobby,
        favoriteFood: Ffood,
        bornCity: Ciudad,
    }
    return fetch(url,{
      method: "put",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body),     
    })
    .then(res => res.json())
    .catch(err => console.error(err.message))
    .then(respuesta => console.log(respuesta))
   
 }
 
 return(
   <View> 
    <TextInput style={style} value={Ncuenta} onChangeText={number => setNcuenta(number)} title='Numero de cuenta'/>
    <TextInput style={style} value={Nphone} onChangeText={number => setNphone(number)} title='Numero de telefono'/>
    <TextInput style={style} value={Nhobby} onChangeText={text => setHobby(text)} title='Hobby favorito'/>
    <TextInput style={style} value={Ffood} onChangeText={text => setCfavorita(text)} title='Comida favorita'/>
    <TextInput style={style} value={Ciudad} onChangeText={text => setCiudad(text)} title='Ciudad de nacimiento'/>
     
    <Button onPress={hacerFetch} title='Enviar'></Button>
    <Button onPress={getData} title='Lista'></Button>
    <FlatList
        data={Datos}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
   </View>
 )
 
}
 export default App;
 
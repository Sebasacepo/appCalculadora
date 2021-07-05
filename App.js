import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react'; //Hook useState para los estados
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
// import Titulo from './components/Titulo';
export default function App() {
  //definir los estados (variables) de este componente
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2]= useState('');
  const [resultado, setResultado]=useState('0');
 
  //definir funciones o métodos
  function validar(){
    if (numero1 == '' || numero2 ==''){
      alert("ingrese los números...");
    }else{
      alert(numero1 +" "+numero2);

    }
  }
  const limpiar = function(){
    setNumero2("");
    setNumero1("");
  }
  function multi(){
    setResultado(numero1 * numero2);
    

  }
  function division(){
    setResultado(numero1 / numero2);
    
  }
  function suma(){
    setResultado(numero1 + numero2);
    
  }
  function resta(){

    setResultado(numero1 - numero2);
  }
  
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Text>{'\n'}</Text>
      <Text>Número 1</Text>
      <TextInput
        placeholder="Ingrese el número"
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 16, borderWidth: 1 }}
        onChangeText={numero1 => setNumero1(numero1)} //esta instrucción dice que ponga lo que hay en número dentro de la variable número
        value={numero1}
     >
      </TextInput>
      <Text>Número 2</Text>
      <TextInput
        placeholder="Ingrese su número"
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 16, borderWidth: 1 }}
        onChangeText={numero2 => setNumero2(numero2)}
        value={numero2}
      >
      </TextInput>      
     
      <Text>{'\n'}</Text>
      <Button
        title="*"
        onPress={multi}
       
      >

      </Button>
      <Button
        title="/"
        onPress={division}

      >

      </Button>
      <Button
        title="+"
        onPress={suma}
      >

      </Button>
      <Button
        title="-"
        onPress={resta}
        
      >

      </Button>
    
      <Button
        title="C"
        onPress={limpiar}
      >

      </Button>
      <TextInput
      value={resultado}

      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default App;
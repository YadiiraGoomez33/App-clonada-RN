import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <View style={styles.encabezadoContent}>
        <Image source={require('./assets/facebok.jpg')} style={styles.headerImage1}/>
      </View>
    </View>
  )
}

export function Cuerpo() {
  return (
    <View style={styles.contenido}>
      <Text style={styles.text2}>English . Catalá. Más...</Text>
      <Login />
    </View>
  )
}

export const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <TextInput placeholder="Telefono o correo electrónico" style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.input} />
      <Button title='Entrar' color='#000080' />
      <Text style={styles.text1}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.text}>O</Text>
      <Button title='Entrar' color='#008000' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  headerImage:{
    marginTop:30,
    width:300,
    height:70,
  },
  headerImage1:{
    marginTop:10,
    width:350,
    height:260,
  },
  encabezado: {
    marginBottom: 20
  },
  encabezadoContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff8000',
    marginRight: 10,
    marginTop:200
  },
  loginContainer: {
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000000'
  },
  text2: {
    textAlign: 'center',
    color: '#808080'
  },
  text1: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000'
  },
});

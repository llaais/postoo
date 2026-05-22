import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

export default function App() {

  // TELAS
  const [tela, setTela] = useState('login');

  // LOGIN
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // CÁLCULO
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  // LOGIN
  function entrar() {

    if (usuario === '' || senha === '') {
      Alert.alert('Erro', 'Preencha usuário e senha');
      return;
    }

    setTela('home');
  }

  // CÁLCULO
  function calcular() {

    const e = parseFloat(etanol.replace(',', '.'));
    const g = parseFloat(gasolina.replace(',', '.'));

    if (isNaN(e) || isNaN(g)) {
      Alert.alert('Erro', 'Digite valores válidos');
      return;
    }

    if (e / g <= 0.7) {
      setResultado('✅ Melhor abastecer com ETANOL');
    } else {
      setResultado('⛽ Melhor abastecer com GASOLINA');
    }
  }

  // ================= LOGIN =================

  if (tela === 'login') {
    return (

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.background}
        blurRadius={3}
      >

        <SafeAreaView style={styles.overlay}>

          <View style={styles.card}>

            <Image
              source={require('./assets/images/posto.png')}
              style={styles.imagem}
            />

            <Text style={styles.titulo}>
              FuelCalc
            </Text>

            <Text style={styles.subtitulo}>
              Faça login para continuar
            </Text>

            <TextInput
              placeholder="Usuário"
              placeholderTextColor="#777"
              style={styles.input}
              value={usuario}
              onChangeText={setUsuario}
            />

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#777"
              secureTextEntry
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.botao}
              onPress={entrar}
            >
              <Text style={styles.textoBotao}>
                ENTRAR
              </Text>
            </TouchableOpacity>

          </View>

        </SafeAreaView>

      </ImageBackground>
    );
  }

  // ================= HOME =================

  if (tela === 'home') {
    return (

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.background}
        blurRadius={3}
      >

        <SafeAreaView style={styles.overlay}>

          <View style={styles.card}>

            <Image
              source={require('./assets/images/posto.png')}
              style={styles.imagem}
            />

            <Text style={styles.titulo}>
              Bem-vinda
            </Text>

            <Text style={styles.subtitulo}>
              Descubra qual combustível vale mais a pena para economizar.
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => setTela('calculo')}
            >
              <Text style={styles.textoBotao}>
                IR PARA CÁLCULO
              </Text>
            </TouchableOpacity>

          </View>

        </SafeAreaView>

      </ImageBackground>
    );
  }

  // ================= CALCULO =================

  return (

    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
      }}
      style={styles.background}
      blurRadius={3}
    >

      <SafeAreaView style={styles.overlay}>

        <View style={styles.card}>

          <Image
            source={require('./assets/images/posto.png')}
            style={styles.imagem}
          />

          <Text style={styles.titulo}>
            FuelCalc
          </Text>

          <Text style={styles.subtitulo}>
            Compare os preços
          </Text>

          <TextInput
            placeholder="Preço do Etanol"
            placeholderTextColor="#777"
            keyboardType="numeric"
            style={styles.input}
            value={etanol}
            onChangeText={setEtanol}
          />

          <TextInput
            placeholder="Preço da Gasolina"
            placeholderTextColor="#777"
            keyboardType="numeric"
            style={styles.input}
            value={gasolina}
            onChangeText={setGasolina}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={calcular}
          >
            <Text style={styles.textoBotao}>
              CALCULAR
            </Text>
          </TouchableOpacity>

          {resultado !== '' && (
            <View style={styles.resultadoBox}>
              <Text style={styles.resultado}>
                {resultado}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setTela('home')}
          >
            <Text style={styles.textoBotao}>
              VOLTAR
            </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  card: {
    width: 330,
    backgroundColor: '#FF7A00',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  imagem: {
    width: 110,
    height: 110,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitulo: {
    color: '#FFE8D1',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  botao: {
    width: '100%',
    backgroundColor: '#1F1F1F',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 5,
  },

  botaoVoltar: {
    width: '100%',
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 15,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  resultadoBox: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 15,
  },

  resultado: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
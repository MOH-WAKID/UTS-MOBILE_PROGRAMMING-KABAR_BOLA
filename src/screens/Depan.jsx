import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../component/Timnas.jpeg')} style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.pageTitle}>Berita</Text>
          <Text style={styles.pageSubtitle}>Sepak Bola Terbaru</Text>

        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Berita')}
          style={styles.btn}>
          <Text style={styles.btnText}>Baca Lebih Lanjut</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
  },
  pageSubtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 40,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;

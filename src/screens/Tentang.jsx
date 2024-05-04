import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>Aplikasi ini didedikasikan untuk para pecinta sepakbola yang ingin tetap update dengan berita terbaru, skor, dan informasi seputar dunia sepakbola.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default About;

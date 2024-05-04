import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Data = [
  {id: 1, title: 'Full Drama, Timnas Jepang U-23 Juara Piala Asia U-23 2024'},
  {id: 2, title: 'Shin Tae-yong: Timnas Indonesia U-23 Sudah Melakukan Yang Terbaik'},
  {id: 3, title: 'Hasil Piala Asia U-23 2024, Irak U-23 vs Indonesia U-23: Skor 2-1 (AET)'},
  {id: 4, title: 'Selamat, Parma Promosi ke Serie A Lagi!'},
  {id: 5, title: 'Como, Klub Milik Orang Indoenesia yang Selangkah Lagi Promosi ke Serie A'},
];

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <NewsItem title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Tentang')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke Tentang</Text>
      </TouchableOpacity>
    </View>
  );
};

const NewsItem = ({title}) => (
  <View style={styles.newsContainer}>
    <Text style={styles.newsTitle}>{title}</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  newsContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

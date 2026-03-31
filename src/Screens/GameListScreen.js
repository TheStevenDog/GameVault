import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { GAMES } from '../data/GameData';
import styles from '../styles/GameListStyles';

const GameListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('GameDetailScreen', { game: item })}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.genre}>{item.genre}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default GameListScreen;


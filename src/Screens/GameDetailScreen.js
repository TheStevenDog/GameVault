import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/GameDetailStyles';

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{game.title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{game.genre}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Plataforma:</Text>
          <Text style={styles.value}>{game.platform}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Año:</Text>
          <Text style={styles.value}>{game.year}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Puntuación:</Text>
          <Text style={styles.value}>{game.rating} ⭐</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Precio:</Text>
          <Text style={styles.value}>
            {game.price === 0 
              ? '¡GRATIS!' 
              : new Intl.NumberFormat('es-CO', { 
                  style: 'currency', 
                  currency: 'COP', 
                  maximumFractionDigits: 0 
                }).format(game.price)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Clasificación:</Text>
          <Text style={styles.value}>{game.ageRating}</Text>
        </View>
        <Text style={styles.descLabel}>Descripción</Text>
        <Text style={styles.description}>{game.description}</Text>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Regresar a la Lista</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;



import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { GAMING_NEWS } from '../data/GamingNewsData';
import styles from '../styles/GamingNewsStyles';

const GamingNewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % GAMING_NEWS.length);
    }, 5000); // Changes every 5 seconds automatically
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);


  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % GAMING_NEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + GAMING_NEWS.length) % GAMING_NEWS.length);
  };

  const news = GAMING_NEWS[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.counter}>
          Noticia {currentIndex + 1} de {GAMING_NEWS.length}
        </Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={handlePrev}>
            <Text style={styles.buttonText}>← Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={handleNext}>
            <Text style={styles.buttonText}>Siguiente →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;
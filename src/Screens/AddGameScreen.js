import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../styles/AddGameStyles';

const AddGameScreen = () => {
  // States for all 5 required fields
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Real-time validation for all fields
  useEffect(() => {
    const isFormValid =
      title.trim().length > 0 &&
      platform.trim().length > 0 &&
      genre.trim().length > 0 &&
      price.trim().length > 0 &&
      ageRating.trim().length > 0;
    
    setIsValid(isFormValid);
  }, [title, platform, genre, price, ageRating]);

  // Shows an Alert with the summary of the data
  const handleAddGame = () => {
    if (isValid) {
      const summary = 
        `Título: ${title}\n` +
        `Plataforma: ${platform}\n` +
        `Género: ${genre}\n` +
        `Precio: $${price}\n` +
        `Clasificación: ${ageRating}`;

      Alert.alert('¡Juego registrado!', summary, [
        { text: 'OK', onPress: handleClear }
      ]);
    }
  };

  // Clears all fields to their initial state
  const handleClear = () => {
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setAgeRating('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Nuevo Juego</Text>
          <Text style={styles.subtitle}>Ingresa la información detallada</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Título del Videojuego</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Grand Theft Auto VI"
              placeholderTextColor="#666"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Plataforma (PS5, Xbox, PC, etc.)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Nintendo Switch"
              placeholderTextColor="#666"
              value={platform}
              onChangeText={setPlatform}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Género (Acción, RPG, etc.)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Aventura"
              placeholderTextColor="#666"
              value={genre}
              onChangeText={setGenre}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Precio</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 299900"
              placeholderTextColor="#666"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Clasificación (E, T, M)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: M"
              placeholderTextColor="#666"
              maxLength={1}
              autoCapitalize="characters"
              value={ageRating}
              onChangeText={setAgeRating}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, !isValid && styles.buttonDisabled]}
            onPress={handleAddGame}
            disabled={!isValid}>
            <Text style={styles.buttonText}>Agregar Juego</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={handleClear}>
            <Text style={styles.secondaryText}>Limpiar Formulario</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;



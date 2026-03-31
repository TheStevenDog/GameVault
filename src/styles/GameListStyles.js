import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1214',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#3DA5D9', // New primary
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  genre: {
    color: '#73BFB8', // New secondary
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1214', // Slightly darker for new palette
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1B1F22',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    borderTopWidth: 3,
    borderTopColor: '#3DA5D9', // New primary
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 28,
  },
  description: {
    color: '#BFACB5', // New neutral
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  counter: {
    color: '#73BFB8', // New secondary
    fontSize: 13,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3DA5D9', // New primary
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#1B1F22', // Darker text for visibility on blue
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1214',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#3DA5D9', // New primary
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#BFACB5', // New neutral
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#73BFB8', // New secondary
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1B1F22',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
  },
  button: {
    backgroundColor: '#3DA5D9', // New primary
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#262D31',
  },
  buttonText: {
    color: '#0F1214',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#BFACB5', // Neutral color for clear
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryText: {
    color: '#0F1214',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;

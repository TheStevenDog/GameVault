import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1214',
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#73BFB8', // New secondary
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 20,
  },
  badgeText: {
    color: '#0F1214',
    fontSize: 13,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    color: '#BFACB5', // New neutral
    fontSize: 14,
    width: 110,
  },
  value: {
    color: '#3DA5D9', // New primary
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  descLabel: {
    color: '#73BFB8', // New secondary
    fontSize: 15,
    marginTop: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  description: {
    color: '#DDDDDD',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30, // Space before the button
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#BFACB5',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#BFACB5',
    fontSize: 15,
    fontWeight: 'bold',
  },

});

export default styles;

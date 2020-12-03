import { StyleSheet } from 'react-native';

const categoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  category: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  categoryPhoto: {
    width: 120,
    height: 120,
    flex: 1,
    opacity: 0.4,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  categoryText: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  },
});
export default categoryStyles;

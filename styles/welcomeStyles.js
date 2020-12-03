import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#64B6FF',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
  link: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
});
export default welcomeStyles;

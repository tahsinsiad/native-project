import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  cartItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1.0)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.0,

    elevation: 2,
  },
  cartImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  crossIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  address: {
    fontSize: 20,
    marginBottom: 15,
  },
  text: {
    color: '#8c8d8f',
  },
});
export default cartStyles;

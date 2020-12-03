import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { MaterialIcons } from '@expo/vector-icons';
import { changeCartCount } from '../redux/actions/productAction';
import cartStyles from '../styles/cartStyles';

const CartItemCard = ({ handleChangeCartCount, cartCount }) => {
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={cartStyles.cartItemWrapper}>
        <Image
          style={cartStyles.cartImage}
          source={{
            uri: 'https://picsum.photos/id/1016/200',
          }}
          resizeMode="cover"
        />
        <View>
          <Text>Product</Text>
          <Text>Lotto</Text>
          <Text style={{ marginBottom: 10 }}>$30</Text>
          <NumericInput
            minValue={1}
            containerStyle={{ backgroundColor: '#dee0e3' }}
            rightButtonBackgroundColor="#dee0e3"
            leftButtonBackgroundColor="#dee0e3"
            value={cartCount}
            onChange={handleChangeCartCount}
          />
        </View>
        <MaterialIcons
          style={cartStyles.crossIcon}
          name="close"
          size={17}
          color="black"
        />
      </View>
    </View>
  );
};

CartItemCard.propTypes = {
  handleChangeCartCount: PropTypes.func,
  cartCount: PropTypes.any,
};

const mapStateToProps = (state) => {
  const { product } = state;
  return {
    cartCount: product.cartCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCartCount: (val) => dispatch(changeCartCount(val)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CartItemCard);

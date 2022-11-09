import { connect } from 'react-redux';
import { Container, Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';


const SimpleCart = (props) => {
  const [show, setShow] = useState(false);
  const removeFromCart = (product) => {
    props.dispatch({ type: 'remove_product', payload: { product } });
  }

  return (
    <>
      <Container>
        <Button variant="contained" color="inherit" onClick={() => setShow(prev => !prev)} >Cart({props.cart.numberOfItems})</Button>
      </Container>
      <div id='cartItems'>
      {show && <Container id='cartItemContainer'>
        {
          props.cart.productList.map(product => (
            <Box key={product.id}>
              <Typography variant="h5" component="div">{product.display}</Typography>
              <Typography variant="body2" color="text.secondary">Quantity: {product.amountInCart}</Typography>
              <Button variant="contained" size="small" onClick={() => removeFromCart(product)}>Remove</Button>
            </Box>
          ))
        }
      </Container>}
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(SimpleCart);
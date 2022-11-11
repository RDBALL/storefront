import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';


const SimpleCart = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products).products;

  const removeFromCart = (product) => {
    dispatch({ type: 'remove_product', payload: { product } });
    const updatedProduct = products.find(currProduct => currProduct._id === product._id);
    updatedProduct.inStock++;
    dispatch({ type: 'update_product', payload: updatedProduct });
  }

  return (
    <>
      <Container>
        <Button data-testid="cartToggleButton" variant="contained" color="inherit" onClick={() => setShow(prev => !prev)} >CART({cart.numberOfItems})</Button>
      </Container>
      <div id='cartItems'>
      {show && <Container id='cartItemContainer'>
        {
          cart.productList.map(product => (
            <Box key={product._id}>
              <Typography data-testid="productInCart" variant="h5" component="div">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">Quantity: {product.amountInCart}</Typography>
              <Button data-testid="removeItemFromCartButton"variant="contained" size="small" onClick={() => removeFromCart(product)}>Remove</Button>
            </Box>
          ))
        }
      </Container>}
      </div>
    </>
  )
}

export default SimpleCart;
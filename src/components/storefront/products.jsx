import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container} from '@mui/material'
import store from './../../store';

function Products() {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products).products;
  const categories = useSelector(state => state.categories);

  const displayList = categories.active === 'all' ? products :
  products.filter(product => product.category === categories.active);

  const addToCart = (product) => {
    if (product.inStock >= 1) {
      dispatch({ type: 'add_product', payload: { product } });
      const updatedProduct = products.find(currProduct => currProduct._id === product._id);
      updatedProduct.inStock--;
      dispatch({type: 'update_product', payload: updatedProduct});
  }}

  return (
    <Container>
      {
        displayList.map(product => (
          <Card sx={{ maxWidth: 350 }} key={product._id}>
          <CardMedia
            component="img"
            height="150"
            image={`https://source.unsplash.com/random?${product.name}`}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
            <Typography variant="body2" color="text.secondary">In Stock Quantity: {product.inStock}</Typography>
          </CardContent>
          <CardActions>
            <Button data-testid="addToCartButton" variant="contained" size="small" onClick={() => addToCart(product)}>Add To Cart</Button>
            <Button variant="contained" size="small">View Details</Button>
          </CardActions>
        </Card>
        ))
      }
    </Container>
  );
}

export default Products;
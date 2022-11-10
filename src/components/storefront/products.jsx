import { useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container} from '@mui/material'
import store from './../../store';

function Products() {

  const products = useSelector(state => state.products).products;
  const categories = useSelector(state => state.categories);

  const displayList = categories.active === 'all' ? products :
  products.filter(product => product.category === categories.active);


  const addToCart = (product) => {
      store.dispatch({ type: 'add_product', payload: { product }});
  }

  return (
    <Container>
      {
        displayList.map(product => (
          <Card sx={{ maxWidth: 350 }} key={product._id}>
          <CardMedia
            component="img"
            height="150"
            image={product.img}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">{product.display}</Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
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
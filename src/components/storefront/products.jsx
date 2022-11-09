import { connect } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container} from '@mui/material'
import store from './../../store';

function Products(props) {

  const displayList = props.products.filter(product => product.category === props.categories.active);

  const addToCart = (product) => {
      store.dispatch({ type: 'add_product', payload: { product }});
  }

  return (
    <Container>
      {
        displayList.map(product => (
          <Card sx={{ maxWidth: 350 }} key={product.id}>
          <CardMedia
            component="img"
            height="150"
            image={product.img}
            alt="product"
          />
          <CardContent>
            <Typography variant="h5" component="div">{product.display}</Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" onClick={() => addToCart(product)}>Add To Cart</Button>
            <Button variant="contained" size="small">View Details</Button>
          </CardActions>
        </Card>
        ))
      }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products.products,
});

export default connect(mapStateToProps)(Products);
const initialState = {
  products: [
    {
      id: 1,
      category: 'food',
      display: 'Food Item',
      normalized: 'food',
      description: 'Product Description',
      price: 5,
      inventoryCount: 100,
      img: 'https://via.placeholder.com/350x150',
    },
    {
      id: 2,
      category: 'electronics',
      display: 'Electronics Product',
      normalized: 'electronics',
      description: 'Product Description',
      price: 500,
      inventoryCount: 10,
      img: 'https://via.placeholder.com/350x150',
    },
    {
      id: 3,
      category: 'games',
      display: 'Game Product',
      normalized: 'games',
      description: 'Product Description',
      price: 50,
      inventoryCount: 10,
      img: 'https://via.placeholder.com/350x150',
    },
    {
      id: 4,
      category: 'weapons',
      display: 'Weapons Product',
      normalized: 'weapons',
      description: 'Product Description',
      price: 100,
      inventoryCount: 5,
      img: 'https://via.placeholder.com/350x150',
    },
  ]
}

const reducer = (state=initialState, action) => {
  if(action.type === 'update_product' && action.payload.normalized) {
    const newProducts = state.products.map(product => {
      if(product.normalized !== action.payload.normalized) return product;
      else return action.payload
    });
    return {...state, products: newProducts }
  } else return state;
}

export default reducer;
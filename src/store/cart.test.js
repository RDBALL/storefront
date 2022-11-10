import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

test('Cart item quantity increases when an item is added to cart', () => {
  render(<App />);

  let currentItemsInCart = screen.getByText('CART(0)')
  expect(currentItemsInCart).toBeInTheDocument();

  const addToCartButton = screen.getByTestId('addToCartButton')
  fireEvent.click(addToCartButton);

  currentItemsInCart = screen.getByText('CART(1)')
  expect(currentItemsInCart).toBeInTheDocument();

  const toggleCartDropdown = screen.getByTestId('cartToggleButton')
  fireEvent.click(toggleCartDropdown);

  let cartQuantity = screen.getByText('Quantity: 1')
  expect(cartQuantity).toBeInTheDocument();

  let productAddedToCart = screen.getByTestId('productInCart')
  expect(productAddedToCart).toBeInTheDocument();

  const removeItemButton = screen.getByTestId('removeItemFromCartButton')
  fireEvent.click(removeItemButton);

  let updatedCart = screen.getByText('CART(0)');


  expect(updatedCart).toBeInTheDocument();
});

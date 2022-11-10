import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

test('Product display updates on category change', () => {
  render(<App />);

  let productCategoryTab = screen.getByTestId('productCategorySelector')
  expect(productCategoryTab).toBeInTheDocument();

  const changeCategory = screen.getByText('ELECTRONICS')
  fireEvent.click(changeCategory)

  let changedProductCategory = screen.getByText('Electronics Product')
  expect(changedProductCategory).toBeInTheDocument();

});

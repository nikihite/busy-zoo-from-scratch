import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/swamp/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the user clicks on the shrek button, there should be one more shrek on the screen', () => {
  render(<App />);
  const charactersOnLoad = screen.getAllByAltText(/shrek|donkey|lord-farquaad|princess-fiona|pinocchio|gingerbread-man|fairy-godmother|puss-in-boots/i);

  expect(charactersOnLoad.length).toBe(8);

  const shrekButton = screen.getByText(/Add Shrek/i);

  fireEvent.click(shrekButton);

  const charactersAfterClick = screen.getAllByAltText(/shrek|donkey|lord-farquaad|princess-fiona|pinocchio|gingerbread-man|fairy-godmother|puss-in-boots/i);

  expect(charactersAfterClick.length).toBe(9);
});


test ('if user clicks on the go to swamp button it takes you to the swamp', () => {
  render(<App />);
  const swamp = screen.getByAltText('far-far-away');
  expect(swamp).toBeInTheDocument();

  const switchButton = screen.getByText(/GO TO SWAMP/i);
  fireEvent.click(switchButton);

  const theresShrek = screen.getByAltText('potty');
  expect(theresShrek).toBeInTheDocument();
});
  
import { render, screen } from '@testing-library/react';
import Character from './Characters';

test ('shrek should be on the screen when loaded', () => {
  render(<Character character='shrek' />);
  const shrekElement = screen.getByAltText( 
    'shrek',
  );
  expect(shrekElement).toBeInTheDocument();
});

test ('donkey should be on the screen when loaded', () => {
  render(<Character character='donkey' />);
  const donkeyElement = screen.getByAltText( 
    'donkey',
  );
  expect(donkeyElement).toBeInTheDocument();
});

test ('lord-farquaad should be on the screen when loaded', () => {
  render(<Character character='lord-farquaad' />);
  const lordFarquaadElement = screen.getByAltText( 
    'lord-farquaad',
  );
  expect(lordFarquaadElement).toBeInTheDocument();
});

test ('princess-fiona should be on the screen when loaded', () => {
  render(<Character character='princess-fiona' />);
  const princessFionaElement = screen.getByAltText( 
    'princess-fiona',
  );
  expect(princessFionaElement).toBeInTheDocument();
});

test ('pinocchio should be on the screen when loaded', () => {
  render(<Character character='pinocchio' />);
  const pinocchioElement = screen.getByAltText( 
    'pinocchio',
  );
  expect(pinocchioElement).toBeInTheDocument();
});
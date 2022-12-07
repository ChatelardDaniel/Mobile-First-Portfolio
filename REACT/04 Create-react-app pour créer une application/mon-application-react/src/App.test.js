import { render, screen } from '@testing-library/react';
import App from './App';

test('Montpellier test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Montpellier/i);
  expect(linkElement).toBeInTheDocument();
});

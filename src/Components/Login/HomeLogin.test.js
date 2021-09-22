import { render, screen } from '@testing-library/react';
import HomeHeader from './HomeLogin';

test('renders learn react link', () => {
  render(<HomeHeader />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

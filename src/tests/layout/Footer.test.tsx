import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '../../layout/Footer';

describe('Footer component', () => {
  it('renders the Footer text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/ExpressLoop Logistics/i)).toBeInTheDocument();
  });
});

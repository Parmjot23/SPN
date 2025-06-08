import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../layout/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('renders the Footer text', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );
    expect(getByText(/SPN Logistics/i)).toBeInTheDocument();
  });
});

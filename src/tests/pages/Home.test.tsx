import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/Home';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

describe('Home page', () => {
  it('renders the hero headline', () => {
    const { getByText } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <Home />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(getByText(/Logistics Excellence/i)).toBeInTheDocument();
  });
});

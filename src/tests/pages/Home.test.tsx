import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home page', () => {
  it('renders the hero headline', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getByText(/Drive Forward with SPN Logistics/i)).toBeInTheDocument();
  });
});

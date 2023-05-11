import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });

  it('renders the MYSTORE link', () => {
    const myStoreLink = screen.getByRole('link', { name: /mystore/i });
    expect(myStoreLink).toBeInTheDocument();
  });

  it('renders the left menu links', () => {
    const leftMenuLinks = [
      { title: 'Women', link: '/products/1' },
      { title: 'Men', link: '/products/2' },
      { title: 'Children', link: '/products/3' },
    ];

    leftMenuLinks.forEach(({ title, link }) => {
      const menuItem = screen.getByRole('link', { name: title });
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveAttribute('href', link);
    });
  });

  it('renders the right menu links', () => {
    const rightMenuLinks = [
      { title: 'Homepage', link: '/' },
      { title: 'About', link: '/' },
      { title: 'Contact', link: '/' },
      { title: 'Stores', link: '/' },
    ];

    rightMenuLinks.forEach(({ title, link }) => {
      const menuItem = screen.getByRole('link', { name: title });
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveAttribute('href', link);
    });
  });

  it('renders the icons', () => {
    const icons = screen.getAllByTestId('icon');
    expect(icons.length).toBe(4);
  });

  it('renders the cart icon with a count of 0', () => {
    const cartIcon = screen.getByText('0');
    expect(cartIcon).toBeInTheDocument();
  });
});

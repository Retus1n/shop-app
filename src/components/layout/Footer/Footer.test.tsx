import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('renders the categories', () => {
    render(<Footer />);
    const categories = screen.getByTestId('heading-categories');
    expect(categories).toBeInTheDocument();
    const categoryLinks = screen.getAllByTestId('listitem-category');
    expect(categoryLinks.length).toBe(5);
  });

  test('renders the links', () => {
    render(<Footer />);
    const links = screen.getByTestId('heading-links');
    expect(links).toBeInTheDocument();
    const linkItems = screen.getAllByTestId('listitem-links');
    expect(linkItems.length).toBe(5);
  });

  test('renders the about section', () => {
    render(<Footer />);
    const about = screen.getByTestId('heading-about');
    expect(about).toBeInTheDocument();
    const aboutText = screen.getByTestId('text-about');
    expect(aboutText).toBeInTheDocument();
  });

  test('renders the contact section', () => {
    render(<Footer />);
    const contact = screen.getByTestId('heading-contact');
    expect(contact).toBeInTheDocument();
    const contactText = screen.getByTestId('text-contact');
    expect(contactText).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Footer, FOOTER_TEST_ID } from './Footer';

describe('Footer', () => {
  test('renders the categories', () => {
    render(<Footer />);
    const categories = screen.getByTestId(FOOTER_TEST_ID.HEADING_CATEGORIES);
    expect(categories).toBeInTheDocument();
    const categoryLinks = screen.getAllByTestId(
      FOOTER_TEST_ID.LISTITEM_CATEGORY,
    );
    expect(categoryLinks.length).toBe(5);
  });

  test('renders the links', () => {
    render(<Footer />);
    const links = screen.getByTestId(FOOTER_TEST_ID.HEADING_LINKS);
    expect(links).toBeInTheDocument();
    const linkItems = screen.getAllByTestId(FOOTER_TEST_ID.LISTITEM_LINKS);
    expect(linkItems.length).toBe(5);
  });

  test('renders the about section', () => {
    render(<Footer />);
    const about = screen.getByTestId(FOOTER_TEST_ID.HEADING_ABOUT);
    expect(about).toBeInTheDocument();
    const aboutText = screen.getByTestId(FOOTER_TEST_ID.ABOUT_TEXT);
    expect(aboutText).toBeInTheDocument();
  });

  test('renders the contact section', () => {
    render(<Footer />);
    const contact = screen.getByTestId(FOOTER_TEST_ID.HEADING_CONTACT);
    expect(contact).toBeInTheDocument();
    const contactText = screen.getByTestId(FOOTER_TEST_ID.TEXT_CONTACT);
    expect(contactText).toBeInTheDocument();
  });
});

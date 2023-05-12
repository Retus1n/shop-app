import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Typography, TypographyProps, TYPOGRAPHY_TEST_IDS } from './Typography';
import styles from './Typography.module.scss';

describe('Typography', () => {
  const defaultProps: TypographyProps = {
    variant: 'title-1',
    children: 'Test content',
  };

  test('renders with default tag', () => {
    render(<Typography {...defaultProps} />);
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(container).toBeInTheDocument();
    expect(container.tagName).toBe('DIV');
  });

  test('renders with custom tag', () => {
    const customTagProps: TypographyProps = {
      ...defaultProps,
      tag: 'h1',
    };
    render(<Typography {...customTagProps} />);
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(container.tagName).toBe('H1');
  });

  test('renders with correct styles for title-1 variant', () => {
    render(<Typography {...defaultProps} />);
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(container).toHaveClass(styles.title);
  });

  test('renders with correct styles for description-1 variant', () => {
    const descriptionProps: TypographyProps = {
      ...defaultProps,
      variant: 'description-1',
    };
    render(<Typography {...descriptionProps} />);
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(container).toHaveClass(styles.description);
  });

  test('renders children correctly', () => {
    render(<Typography {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.children as string),
    ).toBeInTheDocument();
  });
});

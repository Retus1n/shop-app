import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slider } from './Slider';

describe('Slider', () => {
  test('renders the Slider component', () => {
    render(<Slider />);
    const sliderElement = screen.getByTestId('slider');
    expect(sliderElement).toBeInTheDocument();
  });

  test('changes slide when next button is clicked', () => {
    render(<Slider />);
    const nextButton = screen.getByTestId('next-button');
    const container = screen.getByTestId('container');

    fireEvent.click(nextButton);
    expect(container).toHaveStyle('transform: translateX(-100vw)');

    fireEvent.click(nextButton);
    expect(container).toHaveStyle('transform: translateX(-200vw)');
  });

  test('changes slide when previous button is clicked', () => {
    render(<Slider />);
    const prevButton = screen.getByTestId('prev-button');
    const container = screen.getByTestId('container');

    fireEvent.click(prevButton);
    expect(container).toHaveStyle('transform: translateX(-200vw)');

    fireEvent.click(prevButton);
    expect(container).toHaveStyle('transform: translateX(-100vw)');
  });
});

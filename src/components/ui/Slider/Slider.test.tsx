import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slider, SLIDER_TEST_ID } from './Slider';

describe('Slider', () => {
  test('renders the Slider component', () => {
    render(<Slider />);
    const sliderElement = screen.getByTestId(SLIDER_TEST_ID.SLIDER);
    expect(sliderElement).toBeInTheDocument();
  });

  test('changes slide when next button is clicked', () => {
    render(<Slider />);
    const nextButton = screen.getByTestId(SLIDER_TEST_ID.NEXT_BUTTON);
    const container = screen.getByTestId(SLIDER_TEST_ID.CONTAINER);

    fireEvent.click(nextButton);
    expect(container).toHaveStyle('transform: translateX(-100vw)');

    fireEvent.click(nextButton);
    expect(container).toHaveStyle('transform: translateX(-200vw)');
  });

  test('changes slide when previous button is clicked', () => {
    render(<Slider />);
    const prevButton = screen.getByTestId(SLIDER_TEST_ID.PREV_BUTTON);
    const container = screen.getByTestId(SLIDER_TEST_ID.CONTAINER);

    fireEvent.click(prevButton);
    expect(container).toHaveStyle('transform: translateX(-200vw)');

    fireEvent.click(prevButton);
    expect(container).toHaveStyle('transform: translateX(-100vw)');
  });
});

import { render, screen, fireEvent } from '@testing-library/vue';
import * as stories from './GButton.stories';

const { PrimaryButton, OutlinedButton, LinkButton, DefaultButton } = stories;

describe('GButton : ', () => {
  test('renders primary button with default args', () => {
    render(PrimaryButton());
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders outlined button with default args', () => {
    render(OutlinedButton());
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders link button with default args', () => {
    render(LinkButton());
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders default button as anchor tag', () => {
    render(DefaultButton({ as: 'a' }));
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders default button as fluid', () => {
    render(DefaultButton({ fluid: true }));
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('renders default button with native attributes passed', () => {
    render(DefaultButton({ id: 'my-button', class: 'my-button', disabled: true }));
    const buttonElement = screen.getByText('Click me!');
    expect(buttonElement).toMatchSnapshot();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(DefaultButton({ onClick: handleClick }));
    fireEvent.click(screen.getByText('Click me!'));
    expect(handleClick).toHaveBeenCalled();
  });
});

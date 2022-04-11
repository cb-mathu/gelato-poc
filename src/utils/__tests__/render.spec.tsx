import { fireEvent, render, screen } from '@testing-library/vue';
import { simpleComponentFactory } from '../render';

describe('simpleComponentFactory : ', () => {
  test('renders the component with props', () => {
    const { container } = render(simpleComponentFactory('div', 'g-form'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders the component with slots', () => {
    const GForm = simpleComponentFactory('div', 'g-form');
    const element = {
      render: () => <GForm>Hello World</GForm>,
    };
    render(element);
    expect(screen.getByText('Hello World')).toBeVisible();
  });

  test('renders the component with events attached', () => {
    const GForm = simpleComponentFactory('div', 'g-form');
    const handleClick = jest.fn();
    const element = {
      render: () => <GForm onClick={handleClick}>Hello World</GForm>,
    };
    render(element);
    fireEvent.click(screen.getByText('Hello World'));
    expect(handleClick).toHaveBeenCalled();
  });
});

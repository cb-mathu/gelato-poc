import { render, screen, fireEvent } from '@testing-library/vue';
import * as stories from './GAddressDisplay.stories';

const { DefaultAddress } = stories;

describe('GAddressDisplay : ', () => {
  test('renders default address with all values', () => {
    const { container } = render(DefaultAddress());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls onEdit prop when clicked', () => {
    const handleClick = jest.fn();
    render(DefaultAddress({ onEdit: handleClick }));
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});

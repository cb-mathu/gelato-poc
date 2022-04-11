import { render, screen, fireEvent } from '@testing-library/vue';
import * as stories from './GTag.stories';

const { DefaultTag, PrimaryTag, SecondaryTag, TertiaryTag } = stories;

describe('GTag : ', () => {
  test('renders primary tag with default args', () => {
    render(PrimaryTag());
    const tagElement = screen.getByText('Plan');
    expect(tagElement).toMatchSnapshot();
  });

  test('renders secondary tag with default args', () => {
    render(SecondaryTag());
    const tagElement = screen.getByText('Plan');
    expect(tagElement).toMatchSnapshot();
  });

  test('renders tertiary tag with default args', () => {
    render(TertiaryTag());
    const tagElement = screen.getByText('Plan');
    expect(tagElement).toMatchSnapshot();
  });

  test('renders default button with native attributes passed', () => {
    render(DefaultTag({ id: 'my-tag', class: 'my-tag', title: 'my tag' }));
    const tagElement = screen.getByText('Plan');
    expect(tagElement).toMatchSnapshot();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(DefaultTag({ onClick: handleClick }));
    fireEvent.click(screen.getByText('Plan'));
    expect(handleClick).toHaveBeenCalled();
  });
});

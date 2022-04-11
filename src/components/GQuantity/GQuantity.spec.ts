import { render, screen, fireEvent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import * as stories from './GQuantity.stories';

const { DefaultQuantity, DisabledQuantity, InvalidQuantity, ReadOnlyQuantity } = stories;

const fieldName = 'plan-qty';
const fieldValue = '6';

const fireIncControl = () => {
  const [, incElement] = screen.getAllByRole('button');
  fireEvent.click(incElement);
};

const fireDecControl = () => {
  const [decElement] = screen.getAllByRole('button');
  fireEvent.click(decElement);
};

const fireControls = () => {
  fireIncControl();
  fireDecControl();
};

describe('GQuantity : ', () => {
  test('renders quantity with default args', () => {
    const handleClick = jest.fn();
    const { container } = render(DefaultQuantity({ onClick: handleClick }));
    fireControls();
    expect(handleClick).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  test('renders quantity with native attributes', () => {
    const { container } = render(DefaultQuantity({ min: 4, max: 5, step: 2 }));
    expect(container).toMatchSnapshot();
  });

  it('pressing tab should focus elements', () => {
    const { container } = render(DefaultQuantity());
    userEvent.tab();
    const [dec, inc] = screen.getAllByRole('button');
    expect(dec).toHaveFocus();
    userEvent.tab();
    expect(container.querySelector('input')).toHaveFocus();
    userEvent.tab();
    expect(inc).toHaveFocus();
  });

  test('does not emit value update event if the value is outside range / boundary via controls', () => {
    const handleClick = jest.fn();
    render(DefaultQuantity({ min: 4, max: 10, modelValue: 10, 'onUpdate:modelValue': handleClick }));
    fireIncControl();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('emits value update event on clicking controls', () => {
    const handleClick = jest.fn();
    render(DefaultQuantity({ 'onUpdate:modelValue': handleClick, modelValue: 1 }));
    fireIncControl();
    expect(handleClick).toHaveBeenCalledWith(2);
  });

  test('emits value update event on changing input', () => {
    const handleClick = jest.fn();
    const { container } = render(DefaultQuantity({ 'onUpdate:modelValue': handleClick }));
    const qtyInput = container.querySelector('input') as HTMLInputElement;
    userEvent.type(qtyInput, fieldValue);
    expect(handleClick).toHaveBeenCalledWith(fieldValue);
  });

  test('renders quantity in disabled state', () => {
    const { container } = render(DisabledQuantity());
    expect(container).toMatchSnapshot();
  });

  it('pressing tab should not focus disabled controls', () => {
    render(DisabledQuantity());
    userEvent.tab();
    // Here first control is taken for testing
    expect(screen.getAllByRole('button')[0]).not.toHaveFocus();
  });

  test('does not update value or emit event when in disabled state', () => {
    const handleClick = jest.fn();
    const { container } = render(DefaultQuantity({ disabled: true, 'onUpdate:modelValue': handleClick }));
    fireControls();
    expect(handleClick).not.toHaveBeenCalled();
    const qtyInput = container.querySelector('input') as HTMLInputElement;
    expect(qtyInput.disabled).toBeTruthy();
  });

  test('renders quantity in readonly state', () => {
    const { container } = render(ReadOnlyQuantity());
    expect(container).toMatchSnapshot();
  });

  test('does not update value or emit event when in readonly state', () => {
    const handleClick = jest.fn();
    const { container } = render(DefaultQuantity({ name: fieldName, readonly: true, 'onUpdate:modelValue': handleClick }));
    fireControls();
    expect(handleClick).not.toHaveBeenCalled();
    const qtyInput = container.querySelector('input') as HTMLInputElement;
    expect(qtyInput.readOnly).toBeTruthy();
  });

  test('renders quantity in invalid state', () => {
    const { container } = render(InvalidQuantity());
    expect(container).toMatchSnapshot();
  });
});

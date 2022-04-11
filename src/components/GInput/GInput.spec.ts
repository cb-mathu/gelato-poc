import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GInput.stories';
import { InputFieldAria } from '../shared-specs/aria';
import { InputTypes } from '../core/Input';
const {
  DefaultInput,
  NumberInput,
  InputWithLabel,
  InputWithDescription,
  InputWithSlots,
  InputWithPrefix,
  InputWithSuffix,
  DisabledInput,
  ReadonlyInput,
  InvalidInput,
  LazyInput,
} = stories;

const testLabel = 'First Name';
const testErroMessage = 'This is an error message, ooh poor you!';

describe('GInput: ', () => {
  test('renders with default args', () => {
    const { container } = render(DefaultInput());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders Number field', () => {
    const { container } = render(NumberInput());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders description', () => {
    const { container } = render(InputWithDescription());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders slots', () => {
    const { container } = render(InputWithSlots());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders hidden field', () => {
    render(DefaultInput({ type: InputTypes.Hidden, label: testLabel }));
    expect(screen.getByLabelText(testLabel)).not.toBeVisible();
  });

  test('renders in disabled state', () => {
    render(DisabledInput());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlyInput());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidInput());
    expect(screen.getByText(testErroMessage)).toBeVisible();
  });

  test('pressing tab will focus input', () => {
    render(InputWithLabel());
    userEvent.tab();
    expect(screen.getByLabelText(testLabel)).toHaveFocus();
  });

  test('focuses input when label is clicked', () => {
    render(InputWithLabel());
    const element = screen.getByText(testLabel);
    userEvent.click(element);
    expect(screen.getByLabelText(testLabel)).toHaveFocus();
  });

  test('lazy: updates input on change event', () => {
    const { container } = render(LazyInput());
    const inputValue = ' Alex';
    userEvent.type(screen.getByLabelText(testLabel), inputValue);
    container.parentElement?.click();
    expect(screen.getByLabelText(testLabel)).toHaveValue('John doe Alex');
  });
});

describe('GInput Group: ', () => {
  test('renders prefix', async () => {
    render(InputWithPrefix());
    expect(screen.getByLabelText(testLabel).parentElement?.firstChild).not.toBeEmptyDOMElement();
  });

  test('renders suffix', async () => {
    render(InputWithSuffix());
    expect(screen.getByLabelText(testLabel).previousSibling).not.toBeEmptyDOMElement();
  });
});

InputFieldAria(InputWithSlots, testLabel, 'input');

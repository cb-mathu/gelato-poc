import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GTextarea.stories';
import { InputFieldAria } from '../shared-specs/aria';
const {
  DefaultTextarea,
  TextareaWithLabel,
  TextareaWithDescription,
  TextareaWithSlots,
  DisabledTextarea,
  ReadonlyTextarea,
  InvalidTextarea,
  LazyTextarea,
} = stories;

const testLabel = 'First Name';
const testErroMessage = 'This is an error message, ooh poor you!';

describe('GTextarea: ', () => {
  test('renders with default args', () => {
    const { container } = render(DefaultTextarea());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders description', () => {
    const { container } = render(TextareaWithDescription());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders slots', () => {
    const { container } = render(TextareaWithSlots());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders in disabled state', () => {
    render(DisabledTextarea());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlyTextarea());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidTextarea());
    expect(screen.getByText(testErroMessage)).toBeVisible();
  });

  test('renders cols', () => {
    render(
      TextareaWithLabel({
        cols: 5,
      }),
    );
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('cols');
  });

  test('renders rows', () => {
    render(
      TextareaWithLabel({
        rows: 5,
      }),
    );
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('rows');
  });

  test('pressing tab will focus textarea', () => {
    render(TextareaWithLabel());
    userEvent.tab();
    expect(screen.getByLabelText(testLabel)).toHaveFocus();
  });

  test('focuses textarea when label is clicked', () => {
    render(TextareaWithLabel());
    const element = screen.getByText(testLabel);
    userEvent.click(element);
    expect(screen.getByLabelText(testLabel)).not.toHaveFocus();
  });

  test('lazy: updates textarea on change event', () => {
    const { container } = render(LazyTextarea());
    const inputValue = ' to user';
    userEvent.type(screen.getByLabelText(testLabel), inputValue);
    container.parentElement?.click();
    expect(screen.getByLabelText(testLabel)).toHaveValue('Hello from chargebee to user');
  });
});

InputFieldAria(TextareaWithSlots, testLabel, 'textarea');

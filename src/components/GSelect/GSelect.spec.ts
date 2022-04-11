import { render, screen, fireEvent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import * as stories from './GSelect.stories';

const {
  DefaultSelect,
  SelectWithDescription,
  SelectWithDescriptionAsSlot,
  SelectWithLabel,
  SelectWithLabelAsSlot,
  InvalidSelect,
  ReadonlySelect,
  DisabledSelect,
} = stories;

describe('GSelect : ', () => {
  test('renders the default with default args', () => {
    const { container } = render(DefaultSelect());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with label passed via prop', () => {
    render(SelectWithLabel());
    expect(screen.getByText('Select Country')).toBeVisible();
  });

  test('renders with label passed via slot', () => {
    render(SelectWithLabelAsSlot());
    expect(screen.getByText('Select Country')).toBeVisible();
  });

  test('renders with label and description passed via prop', () => {
    render(SelectWithDescription());
    expect(screen.getByText('Select Country')).toBeVisible();
  });

  test('renders with label and description passed via slot', () => {
    render(SelectWithDescriptionAsSlot());
    expect(screen.getByText('Select Country')).toBeVisible();
  });

  test('renders in disabled state', () => {
    render(DisabledSelect());
    expect(screen.getByRole('combobox')).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlySelect());
    expect(screen.getByRole('combobox')).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidSelect());
    expect(screen.getByText('This is an error message, ooh poor you!')).toBeVisible();
  });

  test('pressing tab will focus select', () => {
    render(SelectWithLabel());
    userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveFocus();
  });

  test('focuses select when label is clicked', () => {
    render(SelectWithLabel());
    const element = screen.getByText('Select Country');
    userEvent.click(element);
    expect(screen.getByRole('combobox')).toHaveFocus();
  });

  test('does not focuses disabled select when label is clicked', () => {
    render(SelectWithLabel({ disabled: true }));
    const element = screen.getByText('Select Country');
    userEvent.click(element);
    expect(screen.getByRole('combobox')).not.toHaveFocus();
  });

  test('updates the state on option select', async () => {
    render(DefaultSelect({ modelValue: 'Germany' }));
    const element = screen.getByRole('combobox');
    userEvent.selectOptions(element, ['India']);
    expect(element).toHaveValue('India');
  });
});

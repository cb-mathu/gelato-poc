import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GCheckbox.stories';
import { ref } from 'vue';

const {
  DefaultCheckbox,
  DisabledCheckbox,
  CheckboxWithLabel,
  CheckboxWithLabelAsSlot,
  InvalidCheckbox,
  ReadonlyCheckbox,
  CheckboxGroup,
} = stories;

const testLabel = 'Ship to my billing address';
const testErroMessage = 'This is an error message, ooh poor you!';

describe('GCheckbox : ', () => {
  test('renders with default args', () => {
    const { container } = render(DefaultCheckbox());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with label passed via prop', () => {
    render(CheckboxWithLabel());
    expect(screen.getByText(testLabel)).toBeVisible();
  });

  test('renders with label passed via slot', () => {
    render(CheckboxWithLabelAsSlot());
    expect(screen.getByText(testLabel)).toBeVisible();
  });

  test('renders in disabled state', () => {
    render(DisabledCheckbox());
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlyCheckbox());
    expect(screen.getByRole('checkbox')).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidCheckbox());
    expect(screen.getByText(testErroMessage)).toBeVisible();
  });

  test('pressing tab will focus checkbox', () => {
    render(CheckboxWithLabel());
    userEvent.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });

  test('focuses checkbox when label is clicked', () => {
    render(CheckboxWithLabel());
    const element = screen.getByText(testLabel);
    userEvent.click(element);
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });

  test('does not update value in disabled state when label is clicked', () => {
    render(CheckboxWithLabel({ disabled: true }));
    userEvent.click(screen.getByText(testLabel));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('updates the state on click', async () => {
    render(CheckboxWithLabel());
    await userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});

describe('GCheckbox Group : ', () => {
  test('updates the value when binded to an array', async () => {
    const addresses = ref([] as string[]);
    const { container } = render(CheckboxGroup({ addresses }));
    await userEvent.click(screen.getByText(testLabel));
    expect(addresses.value.includes('billing')).toBe(true);
  });
});

import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GRadio.stories';
import { ControlFieldAria } from '../shared-specs/aria';

const { DefaultRadio, DisabledRadio, ReadonlyRadio, InvalidRadio, RadioGroup } = stories;

const testLabel = 'On';
const testSecondaryLabel = 'Off';
const testErroMessage = 'This is an error message, ooh poor you!';

describe('GRadio: ', () => {
  test('renders with default args', () => {
    const { container } = render(DefaultRadio());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with label passed via slot', () => {
    render(DefaultRadio());
    expect(screen.getByText(testLabel)).toBeVisible();
  });

  test('renders in disabled state', () => {
    render(DisabledRadio());
    expect(screen.getByRole('radio')).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlyRadio());
    expect(screen.getByRole('radio')).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidRadio());
    expect(screen.getByText(testErroMessage)).toBeVisible();
  });

  test('pressing tab will focus radio', () => {
    render(DefaultRadio());
    userEvent.tab();
    expect(screen.getByRole('radio')).toHaveFocus();
  });

  test('focuses radio when label is clicked', () => {
    render(DefaultRadio());
    const element = screen.getByText(testLabel);
    userEvent.click(element);
    expect(screen.getByRole('radio')).toHaveFocus();
  });

  test('does not update value in disabled state when label is clicked', () => {
    render(DefaultRadio({ disabled: true }));
    userEvent.click(screen.getByText(testLabel));
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  test('updates the state on click', async () => {
    render(DefaultRadio());
    await userEvent.click(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('renders checked radio', async () => {
    render(DefaultRadio({ value: 'On', modelValue: 'On' }));
    expect(screen.getByLabelText(testLabel)).toBeChecked();
  });
});

describe('GRadio Group: ', () => {
  test('atmost one radio must be checked', async () => {
    render(RadioGroup());
    await userEvent.click(screen.getByLabelText(testLabel));
    await userEvent.click(screen.getByLabelText(testSecondaryLabel));
    expect(screen.getByLabelText(testSecondaryLabel)).toBeChecked();
    expect(screen.getByLabelText(testLabel)).not.toBeChecked();
  });

  test('renders default value for radio group', async () => {
    render(RadioGroup({ value: 'On' }));
    expect(screen.getByLabelText(testLabel)).toBeChecked();
  });
});

ControlFieldAria(DefaultRadio, testLabel, 'radio');

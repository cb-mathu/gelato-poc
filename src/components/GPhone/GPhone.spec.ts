import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GPhone.stories';
import { formatPhoneNumber } from './utils';
const {
  DefaultPhone,
  PhoneWithLabel,
  PhoneWithDescription,
  PhoneWithSlots,
  DisabledPhone,
  ReadonlyPhone,
  InvalidPhone,
  LazyPhone,
} = stories;

const testLabel = 'Phone number';
const testErroMessage = 'This is an error message, ooh poor you!';

describe('GPhone: ', () => {
  test('renders with default args', () => {
    const { container } = render(DefaultPhone({}));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders description', () => {
    const { container } = render(PhoneWithDescription());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders slots', () => {
    const { container } = render(PhoneWithSlots());
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders in disabled state', () => {
    render(DisabledPhone());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('disabled');
  });

  test('renders in readonly state', () => {
    render(ReadonlyPhone());
    expect(screen.getByLabelText(testLabel)).toHaveAttribute('readonly');
  });

  test('renders in invalid state', () => {
    render(InvalidPhone());
    expect(screen.getByText(testErroMessage)).toBeVisible();
  });

  test('pressing tab will focus phone country select dropdown and input', () => {
    render(PhoneWithLabel());
    userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveFocus();
    userEvent.tab();
    expect(screen.getByLabelText(testLabel)).toHaveFocus();
  });

  test('focuses phone input when label is clicked', () => {
    render(PhoneWithLabel());
    const element = screen.getByText(testLabel);
    userEvent.click(element);
    expect(screen.getByLabelText(testLabel)).toHaveFocus();
  });

  test('lazy: updates phone input on change event', () => {
    const { container } = render(LazyPhone());
    const inputValue = '1234567890';
    userEvent.type(screen.getByLabelText(testLabel), inputValue);
    container.parentElement?.click();
    expect(screen.getByLabelText(testLabel)).toHaveValue('1234567890');
  });

  test('renders CA as default countryCode', () => {
    render(PhoneWithDescription());
    expect(screen.getByRole('combobox')).toHaveValue('+1');
  });

  test('Splits the country code from phone number and displays phone number', () => {
    render(PhoneWithLabel());
    expect(screen.getByLabelText(testLabel)).toHaveValue();
  });

  test('Formats the phone as per the countryCode', () => {
    const { phoneNumber } = formatPhoneNumber({
      phoneNumber: '7502954646',
      dialCode: '+91',
    });
    render(
      PhoneWithLabel({
        modelValue: '7502954646',
        countryCode: 'IN',
      }),
    );
    expect(phoneNumber).toEqual('75 02 954646');
    expect(screen.getByLabelText(testLabel)).toHaveValue('75 02 954646');
  });

  test("Formats the phone number with default format if format for the country doesn't exist", () => {
    render(
      PhoneWithLabel({
        modelValue: '123455666663',
        countryCode: 'BM',
      }),
    );
    expect(screen.getByLabelText(testLabel)).toHaveValue('123 455 6666');
  });

  test('Should not accept special characters', () => {
    render(
      PhoneWithLabel({
        modelValue: '3u&423423!@#',
      }),
    );
    expect(screen.getByLabelText(testLabel)).toHaveValue('3u 42 3423');
  });

  test('Should not accept special characters on paste', async () => {
    render(PhoneWithLabel({ modelValue: '' }));
    await userEvent.paste(screen.getByLabelText(testLabel), '3u&423423!@#');
    expect(screen.getByLabelText(testLabel)).toHaveValue('3u 42 3423');
  });

  test('Should prepend country code in the emittedValue', () => {
    const wrapper = render(
      PhoneWithLabel({
        modelValue: '7502954647',
        countryCode: 'IN',
      }),
    );
    const emittedValue = wrapper.emitted()['update:modelValue'][0];
    expect(emittedValue).toEqual(['+917502954647']);
  });

  test('format must be changes when country code is changed', async () => {
    render(
      PhoneWithLabel({
        modelValue: '7502954647',
        countryCode: 'IN',
      }),
    );
    await userEvent.selectOptions(screen.getByRole('combobox'), '+62');
    expect((screen.getByRole('option', { name: 'ID' }) as HTMLOptionElement).selected).toBe(true);
    expect(screen.getByLabelText(testLabel)).toHaveValue('750-295-464');
  });

  test('Passing invalid country code', async () => {
    render(
      PhoneWithLabel({
        modelValue: '7502954647',
        countryCode: 'DND',
      }),
    );
    expect(screen.getByLabelText(testLabel)).toHaveValue('750 295 4647');
  });
});

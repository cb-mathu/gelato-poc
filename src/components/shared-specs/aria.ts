/* istanbul ignore file */
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

export const FormFieldAria = (Component: any, label: string, role: string) =>
  describe(`G${role.toUpperCase()}-Form Field ARIA`, () => {
    test('renders aria-labelledBy', async () => {
      render(Component());
      await userEvent.click(screen.getByLabelText(label));
      expect(screen.getByLabelText(label)).toHaveAttribute('aria-labelledBy');
    });

    test('renders aria-invalid', async () => {
      render(Component({ invalid: true }));
      await userEvent.click(screen.getByLabelText(label));
      expect(screen.getByLabelText(label)).toBeInvalid();
    });

    test('renders aria-errorMessage', async () => {
      const errorMessage = 'This is an error message, ooh poor you!';
      render(Component({ invalid: true, errorMessage: errorMessage }));
      await userEvent.click(screen.getByLabelText(label));
      expect(screen.getByLabelText(label)).toHaveErrorMessage(errorMessage);
    });
  });

export const ControlFieldAria = (Component: any, label: string, role: string) =>
  describe(`G${role.toUpperCase()}-Control Field ARIA`, () => {
    test('renders aria-checked', async () => {
      render(Component());
      await userEvent.click(screen.getByLabelText(label));
      expect(screen.getByRole(role, { checked: true })).toBeTruthy();
    });
    FormFieldAria(Component, label, role);
  });

export const InputFieldAria = (Component: any, label: string, role: string) =>
  describe(`G${role.toUpperCase()}-Input Field ARIA`, () => {
    test('renders aria-describedBy', async () => {
      render(Component());
      await userEvent.click(screen.getByLabelText(label));
      expect(screen.getByLabelText(label)).toHaveAccessibleDescription();
    });
    FormFieldAria(Component, label, role);
  });

import { render, screen, fireEvent } from '@testing-library/vue';
import * as stories from './GModal.stories';

const { DefaultModal, ModalWithContent, ModalWithDescription, ModalWithFooter } = stories;

function getPortalRoot() {
  return document.getElementById('headlessui-portal-root')!;
}

describe('GModal : ', () => {
  test('renders modal by default with any failures', () => {
    render(DefaultModal());
    expect(getPortalRoot().firstChild).toMatchSnapshot();
  });

  test('renders modal with Descritpion', () => {
    render(ModalWithDescription());
    expect(getPortalRoot().firstChild).toMatchSnapshot();
  });

  test('renders modal with Footer', () => {
    render(ModalWithFooter());
    expect(getPortalRoot().firstChild).toMatchSnapshot();
  });

  test('renders modal with Content', () => {
    render(ModalWithContent());
    expect(getPortalRoot().firstChild).toMatchSnapshot();
  });

  test('fires close event on clicking close modal', () => {
    const handleClick = jest.fn();
    render(DefaultModal({ onClose: handleClick, isOpen: true }));
    fireEvent.click(screen.getByLabelText('Close'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('does not render when isOpen is false', () => {
    render(DefaultModal({ isOpen: false }));
    expect(getPortalRoot()).toBe(null);
  });
});

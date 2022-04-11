import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue';
import { isNotEmpty } from '../../utils/common';
import { defineComponent } from 'vue';
import { Close } from '../../components/icons';
import { MODAL_PROPS } from './constants';
import { ModalProps } from './types';

const GModal = defineComponent({
  name: 'GModal',
  props: MODAL_PROPS,

  setup(props, { slots }) {
    return () => {
      if (!props.isOpen) {
        return null;
      }
      // https://github.com/vuejs/jsx-next/issues/134#issuecomment-721030287
      const customEventListeners = {
        onClose: props.onClose,
      };

      const Title = () => <DialogTitle class="g-modal__title">{props.title}</DialogTitle>;

      const Description = () => (props.description ? <DialogDescription>{props.description}</DialogDescription> : null);

      const Content = () => (isNotEmpty(slots?.content?.()) ? <div class="g-modal__body">{slots.content?.()}</div> : null);

      const Footer = () => (isNotEmpty(slots?.footer?.()) ? <div class="g-modal__footer">{slots?.footer?.()}</div> : null);

      return (
        <Dialog open={props.isOpen} static class="g-modal" {...customEventListeners}>
          <div class="g-modal__container">
            <DialogOverlay class="g-modal__overlay" />
            {/* Dummy button for trapping focus - headlessui's Modal component sets focus to the first focusable element
            in the DOM of the dialog. So if the content is large & is scrollable, and we have an action button at the bottom,
            it'll focused meaning the modal content will be scrolled to the bottom. This doesn't work even with `initialFocus`
            prop that lets you set focus to an arbitrary element within the dialog */}
            <button class="g-modal__test"></button>
            <div class="g-modal__content">
              <Title />
              <Description />
              <Content />
              <Footer />
            </div>
            <button type="button" aria-label="Close" class="g-modal__close" onClick={props.onClose}>
              <Close />
            </button>
          </div>
        </Dialog>
      );
    };
  },
});

export default GModal as {
  new (): {
    $props: ModalProps;
  };
};

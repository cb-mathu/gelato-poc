import GModal from './GModal';
import { ModalProps } from './types';
import { ButtonVariant, GButton } from '../../components/GButton';

export default {
  title: 'Component/GModal',
  component: GModal,
};

const onCloseHandler = () => console.log('onClose is called');

const slots = {
  content: () => (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  ),
  footer: () => <GButton>Submit</GButton>,
};

const multiActionsFooter = () => (
  <>
    <GButton>Secondary Action</GButton>
    <GButton variant={ButtonVariant.Primary}>Primary Action</GButton>
  </>
);

const Template = (args: any) => ({
  setup() {
    return () => <GModal {...args} onClose={onCloseHandler} v-slots={slots} />;
  },
});

export const Story: any = Template.bind({});
Story.args = {
  isOpen: true,
  title: 'Terms of service',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
};

export const DefaultModal = (props?: ModalProps) => {
  const onClose = props?.onClose || onCloseHandler;
  return (
    <GModal
      isOpen
      title="Terms of service"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      v-slots={slots}
      {...props}
      onClose={onClose}
    />
  );
};

export const ModalWithDescription = () => (
  <GModal
    title="Terms of service"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    isOpen
    onClose={onCloseHandler}
  />
);

export const ModalWithContent = () => (
  <GModal title="Terms of service" onClose={onCloseHandler} isOpen v-slots={{ content: slots.content }} />
);

export const ModalWithFooter = () => (
  <GModal
    title="Terms of service"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    isOpen
    onClose={onCloseHandler}
    v-slots={{ footer: multiActionsFooter }}
  />
);

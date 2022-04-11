import GNotification from './GNotification';
import { MergedNotificationProps, NotificationSize, NotificationVariant } from './types';
import { SIZES } from './constants';

const SmallContent = () => (
  <p>
    You will be charged after the <span>14-day trial </span>.<a href="#">Learn more</a>
  </p>
);

const LargeContent = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit tellus, interdum a purus a, laoreet congue augue. Donec at
    risus non dui fringilla feugiat. Vestibulum bibendum aliquet magna.{' '}
    <a href="#" class="whitespace-nowrap">
      Learn more
    </a>
  </p>
);

const contents = {
  SmallContent: SmallContent(),
  LargeContent: LargeContent(),
};

export default {
  title: 'Component/GNotification',
  component: GNotification,
  argTypes: {
    size: {
      description: 'Size variants',
      options: SIZES,
      defaultValue: NotificationSize.Large,
      control: {
        type: 'select',
      },
    },
    content: {
      options: Object.keys(contents),
      mapping: contents,
      defaultValue: 'LargeContent',
      control: {
        type: 'select',
      },
    },
  },
};

const Template: any = (args: any) => ({
  setup() {
    const Content = args.content;
    return () => (
      <div style="max-width: 500px">
        <GNotification {...args}>
          <Content />
        </GNotification>
        <GNotification {...args} variant={NotificationVariant.Primary}>
          <Content />
        </GNotification>
        <GNotification {...args} variant={NotificationVariant.Warning}>
          <Content />
        </GNotification>
        <GNotification {...args} variant={NotificationVariant.Alert}>
          <Content />
        </GNotification>
        <GNotification {...args} variant={NotificationVariant.Success}>
          <Content />
        </GNotification>
      </div>
    );
  },
});

export const Story = Template.bind({});

export const DefaultNotification = (props?: MergedNotificationProps) => (
  <GNotification {...(props as any)}>
    <SmallContent />
  </GNotification>
);

export const PrimaryNotification = () => (
  <GNotification variant={NotificationVariant.Primary}>
    <SmallContent />
  </GNotification>
);

export const WarningNotification = () => (
  <GNotification variant={NotificationVariant.Warning}>
    <SmallContent />
  </GNotification>
);

export const AlertNotification = () => (
  <GNotification variant={NotificationVariant.Alert}>
    <SmallContent />
  </GNotification>
);

export const SuccessNotification = () => (
  <GNotification variant={NotificationVariant.Success}>
    <SmallContent />
  </GNotification>
);

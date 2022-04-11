import { defineComponent } from 'vue';
import { NOTIFICATION_PROPS } from './constants';
import { MergedNotificationProps, NotificationSize, NotificationVariant } from './types';
import { Bell, Info, Alert, Success, Warning } from '../icons';

const GNotification = defineComponent({
  name: 'GNotification',
  props: NOTIFICATION_PROPS,

  setup(props, { slots }) {
    const Icon = (props: any) => {
      switch (props.variant) {
        case NotificationVariant.Primary:
          return <Bell />;
        case NotificationVariant.Alert:
          return <Alert />;
        case NotificationVariant.Warning:
          return <Warning />;
        case NotificationVariant.Success:
          return <Success />;
        default:
          return <Info />;
      }
    };

    return () => {
      const classList = {
        [`g-notification`]: true,
        [`g-notification--primary`]: props.variant === NotificationVariant.Primary,
        [`g-notification--warning`]: props.variant === NotificationVariant.Warning,
        [`g-notification--success`]: props.variant === NotificationVariant.Success,
        [`g-notification--alert`]: props.variant === NotificationVariant.Alert,
        [`g-notification--small`]: props.size === NotificationSize.Small,
      };

      return (
        <div class={classList}>
          <Icon variant={props.variant} class="g-notification__icon" />
          <p class="g-notification__message">{slots.default?.()}</p>
        </div>
      );
    };
  },
});

export default GNotification as {
  new (): {
    $props: MergedNotificationProps;
  };
};

import { render } from '@testing-library/vue';
import * as stories from './GNotification.stories';
import { NotificationSize } from './types';

const { DefaultNotification, PrimaryNotification, WarningNotification, AlertNotification, SuccessNotification } = stories;

describe('GNotification : ', () => {
  test('renders primary notification with default args', () => {
    const { container } = render(PrimaryNotification());
    expect(container).toMatchSnapshot();
  });

  test('renders warning notification with default args', () => {
    const { container } = render(WarningNotification());
    expect(container).toMatchSnapshot();
  });

  test('renders alert notification with default args', () => {
    const { container } = render(AlertNotification());
    expect(container).toMatchSnapshot();
  });

  test('renders success notification with default args', () => {
    const { container } = render(SuccessNotification());
    expect(container).toMatchSnapshot();
  });

  test('renders small size', () => {
    const { container } = render(DefaultNotification({ size: NotificationSize.Small }));
    expect(container).toMatchSnapshot();
  });
});

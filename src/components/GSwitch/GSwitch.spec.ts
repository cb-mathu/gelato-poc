import { render, fireEvent } from '@testing-library/vue';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './GSwitch.stories';

const { DefaultSwitch, DisabledOffSwitch, DisabledOnSwitch, SwitchWithLabel, SwitchWithLabelSlot } = stories;

describe('GSwitch : ', () => {
  it('renders switch by default', () => {
    const { container } = render(DefaultSwitch());
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders button tag by default', () => {
    const { container } = render(DefaultSwitch());
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  it('renders label passed via prop', () => {
    render(SwitchWithLabel());
    expect(screen.getByText('Enable')).toBeTruthy();
  });

  it('renders custom label passed via slot', () => {
    render(SwitchWithLabelSlot());
    expect(screen.getByText('Enable')).toBeTruthy();
  });

  it('updates the state on click', async () => {
    render(SwitchWithLabel({ modelValue: false }));
    await fireEvent.click(screen.getByText('Enable'));
    expect(screen.getByRole('switch').getAttribute('aria-checked')).toBe('true');
  });

  it('pressing tab should focus the switch', () => {
    render(SwitchWithLabel());
    userEvent.tab();
    expect(screen.getByRole('switch')).toHaveFocus();
  });

  it('pressing tab should not focus disabled switch', () => {
    render(DisabledOffSwitch());
    userEvent.tab();
    expect(screen.getByRole('switch')).not.toHaveFocus();
  });

  it('emits the updated state (v-model) on click', async () => {
    const handleClick = jest.fn();
    render(SwitchWithLabel({ modelValue: false, 'onUpdate:modelValue': handleClick }));
    await fireEvent.click(screen.getByText('Enable'));
    expect(handleClick).toHaveBeenCalledWith(true);
  });

  it('renders on switch in disabled state', () => {
    const { container } = render(DisabledOnSwitch());
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders off switch in disabled state', () => {
    const { container } = render(DisabledOffSwitch());
    expect(container.firstChild).toMatchSnapshot();
  });
});

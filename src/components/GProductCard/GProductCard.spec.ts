import { render, screen, fireEvent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import * as stories from './GProductCard.stories';

const {
  DefaultAddonCard,
  DefaultChargeCard,
  DefaultPlanCard,
  InvalidTierPricingCard,
  InvalidUnitPricingCard,
  CardWithDescription,
  CardWithAction,
  MeteredCard,
  PerUnitCard,
  EditableTierPricingCard,
  EditableUnitPricingCard,
} = stories;

describe('GProductCard : ', () => {
  test('renders default plan card', () => {
    const { container } = render(DefaultPlanCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders default addon card', () => {
    const { container } = render(DefaultAddonCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders default charge card', () => {
    const { container } = render(DefaultChargeCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders metered card', () => {
    const { container } = render(MeteredCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders card with description', () => {
    render(CardWithDescription);
    expect(screen.getByText('This is enterprise level plan comes with a 14-day trial period and has a setup cost.')).toBeVisible();
  });

  test('renders per unit card', () => {
    const { container } = render(PerUnitCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders card as readonly state when state is set', () => {
    const { container } = render(PerUnitCard);
    const qty = container.querySelector('input');
    const initialValue = qty?.value;
    userEvent.type(qty as HTMLElement, '1');
    expect(qty?.value).toBe(initialValue);
  });

  test('renders per unit card in editable state', () => {
    const { container } = render(EditableUnitPricingCard);
    const qty = container.querySelector('input');
    const initialValue = qty?.value;
    userEvent.type(qty as HTMLElement, '1');
    expect(qty?.value).not.toBe(initialValue);
  });

  test('renders tiered card in editable state', () => {
    const { container } = render(EditableTierPricingCard);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders card with actions passed', () => {
    render(CardWithAction);
    expect(screen.getByText('Remove')).toBeVisible();
  });

  test('show/hide tiers for tiered card', async () => {
    const { container } = render(EditableTierPricingCard);
    await fireEvent.click(screen.getByText('See details'));
    const el: HTMLElement | null = container.querySelector('.g-product-card__tier');
    expect(el?.textContent).toEqual('$1.00  2 units    $2.00');
    await fireEvent.click(screen.getByText('Hide details'));
    expect(screen.getByText('See details')).toBeVisible();
  });

  describe('Invalid : ', () => {
    test('renders per unit card in invalid state', () => {
      const { container } = render(InvalidUnitPricingCard);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders tiered card in invalid state', () => {
      const { container } = render(InvalidTierPricingCard);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

import { computed, ComputedRef, ref } from 'vue';
import GProductCard from './GProductCard';
import {
  ItemType,
  LoaderState,
  PricingModel,
  Product,
  ProductCardAction,
  ProductCardActionEvent,
  ProductCardActionType,
  ProductCardState,
  ProductTier,
} from './types';
import { GButton } from '../GButton';
import { getItemTypeLabel } from './utils';

export default {
  title: 'Component/GProductCard',
  component: GProductCard,
};

// Mock & Utils

const subTotal = computed(() => '$5.00');
const getQuantity = (value = 1) => computed(() => value);
const defaultDescription = 'This is enterprise level plan comes with a 14-day trial period and has a setup cost.';

const invalidProductState: ComputedRef<ProductCardState> = computed(() => {
  return {
    quantityConfig: {
      invalid: true,
      errorMessage: 'Quantity should be between 1 and 10',
      editable: true,
    },
    showTag: true,
  };
});

const actionHandler = (event: ProductCardActionEvent) => {
  console.log(`${event.action} on ${event.id}`);
};

const productAddAction: ProductCardAction = {
  id: 'element-id',
  name: ProductCardActionType.AddToCart,
  className: 'add-to-cart-btn',
  displayText: 'Add',
  element: GButton,
};

const productRemoveAction: ProductCardAction = {
  name: ProductCardActionType.Remove,
  className: 'remove-btn',
  displayText: 'Remove',
  element: 'a',
};

function productCardFactory(itemType: ItemType) {
  const pricingModel = PricingModel.FlatFee;
  switch (itemType) {
    case ItemType.Addon:
      return (id: string = 'ssl', name: string = 'SSL') =>
        new ProductCardTestBuilder(id, name, ItemType.Addon).setPrice(pricingModel, subTotal);
    case ItemType.Charge:
      return (id: string = 'day-pass', name: string = 'Day Pass') =>
        new ProductCardTestBuilder(id, name, ItemType.Charge).setPrice(pricingModel, subTotal);
    case ItemType.Plan:
    default:
      return (id: string = 'blossom', name: string = 'Blossom') =>
        new ProductCardTestBuilder(id, name, ItemType.Plan).setPrice(pricingModel, subTotal);
  }
}

const PlanCard = productCardFactory(ItemType.Plan);
const AddonCard = productCardFactory(ItemType.Addon);
const ChargeCard = productCardFactory(ItemType.Charge);
class ProductCardTestBuilder {
  product: Product;
  state: ComputedRef<ProductCardState> = computed(() => {
    return { showTag: true };
  });
  actions: ProductCardAction[] = [];
  loaderState?: LoaderState;
  constructor(id: string, name: string, type: ItemType) {
    this.product = {
      id,
      name,
      type,
      labels: {
        units: 'units',
        itemType: getItemTypeLabel(type),
      },
    };
  }

  setDescription(description?: string) {
    this.product.description = description || defaultDescription;
    return this;
  }

  setMetered() {
    this.product.metered = true;
    return this;
  }

  setPrice(pricingModel: PricingModel, subTotal: ComputedRef<string>, value?: string | ProductTier[]) {
    this.product.pricingModel = pricingModel;
    if ([PricingModel.Stairstep, PricingModel.Tiered, PricingModel.Volume].includes(pricingModel)) {
      this.product.tiers = computed(() => value as ProductTier[]);
    }
    this.product.subTotal = subTotal;
    PricingModel.PerUnit === pricingModel && (this.product.unitPrice = computed(() => value as string));
    this.product.quantity = PricingModel.FlatFee !== pricingModel ? getQuantity() : undefined;
    return this;
  }

  setActions(actions: ProductCardAction[]) {
    this.actions = actions;
    return this;
  }

  setRemoveAction() {
    this.actions.push(productRemoveAction);
    return this;
  }

  setQuantity(quantity: ComputedRef<number> = getQuantity()) {
    this.product.quantity = quantity;
    return this;
  }

  setEditable() {
    this.state.value.quantityConfig = {
      ...(this.state.value.quantityConfig || {}),
      editable: true,
    };
    return this;
  }

  setLoading() {
    this.state.value.quantityConfig = {
      ...(this.state.value.quantityConfig || {}),
      editable: true,
    };
    this.loaderState = LoaderState.loading;
    return this;
  }

  setReadonly() {
    this.state.value.quantityConfig = {
      ...(this.state.value.quantityConfig || {}),
      editable: false,
    };
    this.loaderState = LoaderState.readonly;
    return this;
  }

  setInvalid() {
    this.state.value.quantityConfig = {
      ...(this.state.value.quantityConfig || {}),
      ...invalidProductState.value.quantityConfig,
    };
    return this;
  }

  data() {
    return {
      product: this.product,
      actions: this.actions,
    };
  }

  getComponent() {
    const key = Math.random();
    return () => (
      <GProductCard
        key={key}
        onAction={actionHandler}
        loaderState={this.loaderState}
        product={this.product}
        actions={this.actions}
        state={this.state}
        labels={{ quantity: 'units', seeDetails: 'See details', hideDetails: 'Hide details' }}
      />
    );
  }
}

const Template = () => ({
  setup() {
    const sampleProduct: Product = {
      id: 'cbdemo_scale',
      name: 'Scale',
      description: defaultDescription,
      quantity: computed(() => 2),
      subTotal: computed(() => '$10.00'),
      unitPrice: computed(() => '$5.00'),
      type: ItemType.Plan,
      labels: {
        units: 'units',
        itemType: getItemTypeLabel(ItemType.Plan),
      },
    };

    return () => (
      <div style="display: grid; grid-gap: 1rem;">
        <GProductCard
          onAction={actionHandler}
          product={sampleProduct}
          actions={[productAddAction]}
          state={computed(() => {
            return { quantityConfig: { editable: true }, showTag: true };
          })}
          labels={{ quantity: 'units', seeDetails: 'See details', hideDetails: 'Hide details' }}
        />
        <GProductCard
          onAction={actionHandler}
          product={sampleProduct}
          actions={[productRemoveAction]}
          state={invalidProductState}
          labels={{ quantity: 'units', seeDetails: 'See details', hideDetails: 'Hide details' }}
        />
      </div>
    );
  },
});

export const Story = Template.bind({});

export const DefaultPlanCard = PlanCard().getComponent();
export const DefaultAddonCard = AddonCard().getComponent();
export const DefaultChargeCard = ChargeCard().getComponent();
export const CardWithDescription = PlanCard().setDescription().getComponent();
export const CardWithAction = PlanCard().setRemoveAction().getComponent();
export const MeteredCard = PlanCard().setMetered().getComponent();
export const PerUnitCard = PlanCard().setPrice(PricingModel.PerUnit, subTotal, '$5').getComponent();
export const EditableUnitPricingCard = PlanCard().setPrice(PricingModel.PerUnit, subTotal, '$5').setEditable().getComponent();
export const InvalidUnitPricingCard = PlanCard().setPrice(PricingModel.PerUnit, subTotal, '$5').setInvalid().getComponent();
export const TierPricingCard = PlanCard()
  .setPrice(PricingModel.Tiered, subTotal, [
    {
      units: 2,
      unitPrice: '$1.00',
      subTotal: '$2.00',
    },
    {
      units: 3,
      unitPrice: '$1.00',
      subTotal: '$3.00',
    },
  ])
  .setQuantity(getQuantity(5))
  .getComponent();

export const EditableTierPricingCard = PlanCard()
  .setPrice(PricingModel.Tiered, subTotal, [
    {
      units: 2,
      unitPrice: '$1.00',
      subTotal: '$2.00',
    },
    {
      units: 3,
      unitPrice: '$1.00',
      subTotal: '$3.00',
    },
  ])
  .setDescription()
  .setQuantity(getQuantity(5))
  .setEditable()
  .getComponent();

export const InvalidTierPricingCard = PlanCard()
  .setPrice(PricingModel.Tiered, subTotal, [
    {
      units: 2,
      unitPrice: '$1.00',
      subTotal: '$2.00',
    },
    {
      units: 3,
      unitPrice: '$1.00',
      subTotal: '$3.00',
    },
  ])
  .setQuantity(getQuantity(5))
  .setDescription()
  .setEditable()
  .setInvalid()
  .getComponent();

export const LoadingTierPricingCard = PlanCard()
  .setPrice(PricingModel.Tiered, subTotal, [
    {
      units: 2,
      unitPrice: '$1.00',
      subTotal: '$2.00',
    },
    {
      units: 3,
      unitPrice: '$1.00',
      subTotal: '$3.00',
    },
  ])
  .setQuantity(getQuantity(5))
  .setDescription()
  .setEditable()
  .setLoading()
  .getComponent();

export const ReadonlyTierPricingCard = PlanCard()
  .setPrice(PricingModel.Tiered, subTotal, [
    {
      units: 2,
      unitPrice: '$1.00',
      subTotal: '$2.00',
    },
    {
      units: 3,
      unitPrice: '$1.00',
      subTotal: '$3.00',
    },
  ])
  .setQuantity(getQuantity(5))
  .setDescription()
  .setReadonly()
  .setRemoveAction()
  .getComponent();

import { defineComponent, PropType, ref, Ref, watch } from 'vue';
import { GButton } from '../GButton';
import { GInput, InputTypes } from '../GInput';
import { Clickable } from '../../utils/accessibility';
import { CouponLabels, AppliedCoupon, CouponState, CouponComponentState } from './types';
import { Keys } from '../../utils/vdom';

export default defineComponent({
  name: 'GApplyCoupon',
  emits: ['apply', 'remove', 'updateCouponComponent', 'change'],
  props: {
    appliedCoupons: {
      type: Array as PropType<Array<AppliedCoupon>>,
      required: true,
    },
    onApply: {
      type: Function as PropType<(couponCode: string) => void>,
      required: false,
    },
    onRemove: {
      type: Function as PropType<(couponCode: string) => void>,
      required: false,
    },
    onUpdateCouponComponent: {
      type: Function as PropType<(componentState: CouponComponentState) => void>,
      required: false,
    },
    onChange: {
      type: Function,
      required: false,
    },
    labels: {
      type: Object as PropType<CouponLabels>,
      required: true,
    },
    state: {
      type: Object as PropType<CouponState>,
      required: false,
    },
  },
  setup(props, { emit }) {
    let couponCode = ref('');
    return () => {
      let componentState: Ref<CouponComponentState> = ref(props.state?.componentState || CouponComponentState.Collapsed);
      let loading = ref(props.state?.loading);

      watch(
        () => props.state?.componentState,
        (newValue, oldValue) => {
          if (newValue && (newValue === CouponComponentState.Disabled || oldValue === CouponComponentState.Disabled)) {
            componentState.value = newValue;
            couponCode.value = '';
          }
        },
      );

      // TODO: Consider moving couponCode value to store instead of gelato
      // Resets coupon value once coupon has been applied successfully
      watch(
        () => props.appliedCoupons,
        (newValue, oldValue) => {
          // TODO: Check for coupon code change also
          const hasChanged = newValue.length !== oldValue.length;
          if (hasChanged) couponCode.value = '';
        },
      );

      const apply = () => {
        emit('apply', couponCode.value);
      };
      const remove = (_couponCode: string) => emit('remove', _couponCode);
      const onKeydown = (e: KeyboardEvent) => {
        emit('change');
        if (e.key === Keys.Enter && !loading.value) {
          apply();
        }
      };

      const couponInput = (state: CouponComponentState) => {
        switch (state) {
          case CouponComponentState.Collapsed:
            return (
              <div class="g-apply-coupon g-summary__row">
                <Clickable
                  as="a"
                  class="g-summary__left g-apply-coupon__expand"
                  onClick={() => emit('updateCouponComponent', CouponComponentState.Expanded)}
                >
                  {props.labels.applyCoupon}
                </Clickable>
              </div>
            );
          case CouponComponentState.Expanded:
            return (
              <div class="g-apply-coupon g-summary__row">
                <div class="g-apply-coupon__main">
                  <GInput
                    type={InputTypes.Text}
                    invalid={!!props.state?.error?.message}
                    errorMessage={props.state?.error?.message}
                    class="g-apply-coupon__input"
                    placeholder={props.labels.applyCouponInputPlaceholder}
                    v-model={couponCode.value}
                    onKeydown={onKeydown}
                  />
                  <div>
                    <GButton class="g-apply-coupon__button" onClick={apply} loading={loading.value} loaderId="coupon-loader">
                      {props.labels.applyButton}
                    </GButton>
                  </div>
                </div>
              </div>
            );
        }
      };

      return (
        <>
          {props.appliedCoupons.map((couponLineItem) => (
            <div class="g-apply-coupon g-summary__row">
              <div class="g-summary__left">
                <span class="g-coupon-name">{couponLineItem.description}</span>{' '}
                {couponLineItem.removable && (
                  <Clickable as="a" class="g-apply-coupon__remove" onClick={() => remove(couponLineItem.code)}>
                    {props.labels.removeCoupon}
                  </Clickable>
                )}
              </div>{' '}
              <div class="g-summary__right g-apply-coupon__discount">-{couponLineItem.amount}</div>
            </div>
          ))}
          {couponInput(componentState.value)}
          {componentState.value !== CouponComponentState.Disabled && <hr id="apply-coupon" />}
        </>
      );
    };
  },
});

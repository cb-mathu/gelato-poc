import { defineComponent, ref, PropType } from 'vue';
import { GButton, ButtonVariant } from '../GButton';
import { GNotification } from '../GNotification';
import GEstimate from './GEstimate';
import GNextCharges from './GNextCharges';
import GConsent from './GConsent';
import GCheckbox from '../GCheckbox/GCheckbox';
import { NotificationVariant } from '../GNotification';
import { BackArrow, Info } from '../icons';
import {
  GOrderSummaryState,
  OrderSummaryAccordionState,
  TaxLineItem,
  OrderSummaryLabels,
  NextEstimate,
  OrderSummaryActions,
  ConsentField,
  AgreementField,
  AppliedCoupon,
  NextChargeState,
  TaxProp,
} from './types';
import { Product } from '../GProductCard';
import { Clickable } from '../../utils/accessibility';
import { URLField } from '.';

export default defineComponent({
  name: 'GOrderSummary',
  props: {
    state: {
      type: Object as PropType<GOrderSummaryState>,
      required: true,
    },
    products: {
      type: Object as PropType<Array<Product>>,
      required: true,
    },
    tax: {
      type: Object as PropType<TaxProp>,
      required: false,
    },
    labels: {
      type: Object as PropType<OrderSummaryLabels>,
      required: true,
    },
    subTotal: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    nextEstimates: {
      type: Object as PropType<Array<NextEstimate>>,
      required: true,
    },
    immediateNextCharge: {
      type: Object as PropType<NextEstimate>,
    },
    actions: {
      type: Object as PropType<OrderSummaryActions>,
    },
    consentFields: {
      type: Object as PropType<Array<ConsentField>>,
    },
    agreementFields: {
      type: Object as PropType<Array<AgreementField>>,
    },
    appliedCoupons: {
      type: Array as PropType<Array<AppliedCoupon>>,
      required: true,
    },
    loader: {
      type: Boolean,
    },
    showBottomInfo: {
      type: Boolean,
    },
  },
  setup(props) {
    let showNextChargeModal = ref(false);
    return () => {
      let state = ref(props.state || { orderSummary: OrderSummaryAccordionState.Expanded });
      const changeState = (newState: OrderSummaryAccordionState) => () => {
        state.value.orderSummary = newState;
      };

      const openNextChargeModal = () => {
        showNextChargeModal.value = true;
      };

      const closeNextChargeModal = () => {
        showNextChargeModal.value = false;
      };
      const classList = {
        'g-card g-summary': true,
        'g-summary--cart': state.value.orderSummary === OrderSummaryAccordionState.Collapsed,
      };

      const TrialNote = () => (
        <GNotification variant={NotificationVariant.Primary}>
          <p class="g-trial_note">{props.labels.trialNote}</p>
        </GNotification>
      );

      const agreementListener: any = {
        'onUpdate:modelValue': props.actions?.onAgreementChange,
      };

      const AgreementFields = (fields: Array<AgreementField>) =>
        state.value.orderSummary === OrderSummaryAccordionState.Expanded &&
        fields?.map((field: AgreementField) => {
          let fieldDescription: string | undefined = field?.description;
          field.urlFields?.forEach((urlField, index) => {
            fieldDescription = fieldDescription?.replace(
              urlField.placeholderKey,
              `<a href='${urlField.url}' target="_blank" class="aggrement_${index}">${urlField.placeholderValue}</a>`,
            );
          });

          return (
            <>
              <hr id="hr-aggrement" />
              {field.checkboxRequired ? (
                <GCheckbox
                  id="terms_conditions"
                  {...agreementListener}
                  v-slots={{ label: <span v-html={fieldDescription}></span> }}
                  invalid={!state.value.submitButtonEnabled}
                  errorMessage={props.labels.consentError}
                ></GCheckbox>
              ) : (
                <div class="aggrement_text" v-html={fieldDescription}></div>
              )}
            </>
          );
        });

      const BackButton = () => (
        <div class="mt-2">
          <GButton id="back-button" variant={ButtonVariant.Link} fluid onClick={props.actions?.onBack}>
            <BackArrow />
            <span>{props.labels.backButton}</span>
          </GButton>
        </div>
      );
      const SubmitButton = () => (
        <GButton
          id="submit-btn"
          variant={ButtonVariant.Primary}
          fluid
          onClick={props.actions?.onSubmit}
          loading={state.value.submitLoadingState}
          loaderId="submit-loader"
          fill="#fff"
        >
          {props.labels.submitButton}
        </GButton>
      );
      const Actions = () => (
        <div class="g-summary__row">
          <div class="g-summary__left">
            {props.immediateNextCharge?.labels?.nextEstimate}
            <div>
              <Clickable as="a" onClick={openNextChargeModal}>
                {props.labels.futureCharges}
              </Clickable>
            </div>
          </div>
          <div class="g-summary__right">{props.immediateNextCharge?.total}</div>
        </div>
      );
      return (
        <aside class={classList}>
          <div class="g-card__content">
            <h2>{props.labels.title}</h2>
            <GEstimate
              state={state.value}
              products={props.products}
              tax={props.tax}
              subTotal={props.subTotal}
              total={props.total}
              loader={props.loader}
              actions={{
                onApplyCoupon: props.actions?.onApplyCoupon,
                onRemoveCoupon: props.actions?.onRemoveCoupon,
                onUpdateCouponComponent: props.actions?.onUpdateCouponComponent,
                onCouponChange: props.actions?.onCouponChange,
              }}
              labels={props.labels}
              appliedCoupons={props.appliedCoupons}
            />
            {props.labels.trialNote && <TrialNote />}
            {state.value.nextCharge !== NextChargeState.Hide && props.immediateNextCharge && <Actions />}
            {state.value.orderSummary === OrderSummaryAccordionState.Expanded && props.consentFields?.length ? (
              <>
                {' '}
                <hr id="hr-consent" />
                <GConsent onConsentChange={props.actions?.onConsentChange} consentFields={props.consentFields} />
              </>
            ) : null}
            {props.agreementFields?.length ? <> {AgreementFields(props.agreementFields)}</> : null}
            <div class="g-summary__actions">
              <SubmitButton />
              {props.showBottomInfo && (
                <div class="g-summary__action-info">
                  <>
                    <Info width={16} />
                    {props.labels.redirect3dVerify}
                  </>
                </div>
              )}
              {state.value.showBackButton && <BackButton />}
            </div>
          </div>
          <GNextCharges
            isOpen={showNextChargeModal.value}
            onClose={closeNextChargeModal}
            nextEstimates={props.nextEstimates}
            labels={props.labels}
          />
        </aside>
      );
    };
  },
});

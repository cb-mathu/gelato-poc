import { ExtractPropTypes, AllowedComponentProps } from 'vue';
import { MODAL_PROPS } from './constants';

export type ModalProps = ExtractPropTypes<typeof MODAL_PROPS> & AllowedComponentProps;

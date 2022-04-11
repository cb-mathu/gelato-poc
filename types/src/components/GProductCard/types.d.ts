import { Component, ComputedRef } from 'vue';
import { QuantityProps } from '../GQuantity/types';
export interface ProductTier {
    units: number;
    unitPrice: string;
    subTotal?: string;
}
export declare enum ItemType {
    Adhoc = "ADHOC",
    Charge = "CHARGE_ITEM_PRICE",
    Addon = "ADDON_ITEM_PRICE",
    Plan = "PLAN_ITEM_PRICE"
}
export declare enum ItemTypeLabel {
    Plan = "Plan",
    Addon = "Addon",
    Charge = "One-time",
    Adhoc = "One-time"
}
export declare enum PricingModel {
    FlatFee = "FLAT_FEE",
    PerUnit = "PER_UNIT",
    Tiered = "TIERED",
    Volume = "VOLUME",
    Stairstep = "STAIRSTEP"
}
export declare enum PeriodUnit {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    YEAR = "YEAR"
}
export declare enum AddedType {
    AUTO = "AUTO",
    MANUAL = "MANUAL"
}
export interface Product {
    id: string;
    name: string;
    type?: ItemType;
    description?: string;
    quantity?: ComputedRef<number> | undefined;
    unitPrice?: ComputedRef<string>;
    subTotal?: ComputedRef<string>;
    pricingModel?: PricingModel;
    tiers?: ComputedRef<Array<ProductTier>>;
    metered?: boolean;
    labels: ProductLabels;
    trialPeriod?: number;
    trialPeriodUnit?: PeriodUnit;
    addedType?: AddedType;
}
export interface ProductLabels {
    units: string;
    itemType: string;
}
export interface Subscription {
    id?: string;
    trial_end?: number;
}
export interface PlainProduct {
    id: string;
    name: string;
    type?: ItemType;
    description?: string;
    quantity?: number;
    unitPrice?: string;
    subTotal?: string;
    pricingModel?: PricingModel;
    tiers?: Array<ProductTier>;
    metered?: boolean;
    labels: ProductLabels;
    trialPeriod?: number;
    trialPeriodUnit?: PeriodUnit;
    addedType?: AddedType;
}
export interface RecommendedProduct extends Omit<Product, 'quantity'> {
    quantity?: ComputedRef<number> | undefined;
}
export declare enum ProductCardActionType {
    Remove = "Remove",
    AddToCart = "AddToCart",
    UpdateQuantity = "UpdateQuantity"
}
export interface ProductCardAction {
    id?: string;
    name: ProductCardActionType;
    className?: string;
    displayText: string;
    element: Component | string;
}
export declare enum LoaderState {
    readonly = "readonly",
    loading = "loading"
}
export interface ProductCardState {
    quantityConfig?: {
        editable?: boolean | undefined;
        hide?: boolean;
        min?: number;
        max?: number;
        hasQuantity?: boolean;
        step?: number;
        fixed?: Array<{
            id: string;
            value: string;
        }>;
        errorMessage?: string;
    } & Partial<Pick<QuantityProps, 'invalid'>>;
    onQtyChange?: (id: string, quantity: string) => void;
    showTag: boolean;
}
export interface ProductCardActionEvent {
    id: string;
    action: ProductCardActionType;
    value?: any;
}
export interface ProductCardLabels {
    quantity: string;
    seeDetails?: string;
    hideDetails?: string;
}

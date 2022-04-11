import { Ref } from 'vue';
export declare function useToggle(value: Ref<boolean>): (value?: boolean) => boolean;
export declare function useToggle(initialValue?: boolean): [Ref<boolean>, (value?: boolean) => boolean];

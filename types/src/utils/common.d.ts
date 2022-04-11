export { AUTO_COMPLETE_MAPPING } from '../components/GPhone/constants';
export declare function omit<T extends Record<string, unknown>>(object: T, keysToOmit?: string[]): {} & T;
export declare const isEmpty: (data: any) => boolean;
export declare const isNotEmpty: (data: any) => boolean;
export declare const assert: (condition: boolean, message: string) => void;

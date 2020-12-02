import React from 'react';
import { SnackConfig, Theme } from '../Types';
declare type SnackContextType = {
    snack: (options: SnackConfig) => void;
};
export declare const SnackContext: React.Context<SnackContextType>;
export declare const useSnack: () => SnackContextType;
declare type SnackProviderProps = {
    children: React.ReactNode;
    theme?: Theme;
};
declare const SnackProvider: ({ children, theme }: SnackProviderProps) => JSX.Element;
export default SnackProvider;

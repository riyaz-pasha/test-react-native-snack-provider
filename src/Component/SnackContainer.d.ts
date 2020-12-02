import React from 'react';
import { Animated, ViewStyle } from 'react-native';
declare type SnackContainerType = {
    style: Animated.AnimatedProps<ViewStyle>;
    children: React.ReactNode;
    onPress?: () => void;
};
export declare const SnackContainer: ({ style, onPress, children }: SnackContainerType) => JSX.Element;
export {};

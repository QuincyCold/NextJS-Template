import { CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type ComponentProps = {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};

import { type ComponentProps } from '@/types';

export type SampleProps = Omit<ComponentProps, 'children'> & {
    text: string;
    onClick?: () => void;
};

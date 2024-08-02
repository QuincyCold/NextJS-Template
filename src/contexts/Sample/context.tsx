import { createContext } from 'react';

type SampleContextFields = {
    text: string;
    doSomething: () => void;
};

/* eslint-disable no-empty-function */
export const SampleContext = createContext<Readonly<SampleContextFields>>({
    text: '',
    doSomething: () => {},
});
/* eslint-enable no-empty-function */

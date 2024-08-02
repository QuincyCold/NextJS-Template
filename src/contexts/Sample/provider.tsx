'use client';

import { useCallback, useState } from 'react';
import { SampleContext } from './context';

type SampleProviderProps = {
    children: React.ReactNode;
};

export function SampleProvider({ children }: Readonly<SampleProviderProps>) {
    const [text, setText] = useState<string>('');
    const doSomething = useCallback((): void => {
        setText('Hello, world!');
    }, []);

    return (
        <SampleContext.Provider
            value={{
                text,
                doSomething,
            }}
        >
            {children}
        </SampleContext.Provider>
    );
}

import { useContext } from 'react';
import { SampleContext } from './context';

export function useSample() {
    return useContext(SampleContext);
}

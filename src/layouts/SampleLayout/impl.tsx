import { SampleLayoutProps } from './types';
import './styles.sass';

export function SampleLayout({ children }: SampleLayoutProps) {
    return <div className="sample-layout">{children}</div>;
}

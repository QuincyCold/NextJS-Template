'use client';

import { type SampleProps } from './types';
import './styles.sass';

export function Sample({ text, onClick, className, style }: Readonly<SampleProps>) {
    return (
        <div className={`sample ${className || ''}`} style={style}>
            <h1 className="sample__text">{text}</h1>
            <button className="sample__button" onClick={onClick}>
                Click me
            </button>
        </div>
    );
}

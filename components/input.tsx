import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './button.css';

interface Props {
    onChange?: () => void;
    className?: string;
    style?: string;
    size?: Size;
    type?: 'text' | 'number';
}

export const Input: FunctionalComponent<Props> = ({ onChange, children, size = 'md', className = '', style, type }) => {
    return (
        <input type={type} class={`input ${size} ${className}`} style={style} onChange={onChange} />
    );
};
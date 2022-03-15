import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './button.css';

interface Props {
    onClick?: () => void;
    children?: ComponentChildren;
    className?: string;
    style?: string;
    variant?: Variant;
    size?: Size;
}

export const Button: FunctionalComponent<Props> = ({ onClick, children, size = 'md', variant = 'primary', className = '', style }) => {
    return (
        <button class={`button ${variant} ${size} ${className}`} style={style} onClick={onClick}>
            {children}
        </button>
    );
};
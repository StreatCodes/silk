import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './button.css';
import { Spinner } from './loader';

interface Props {
    onClick?: () => void;
    children?: ComponentChildren;
    className?: string;
    style?: string;
    variant?: Variant;
    size?: Size;
    loading?: boolean;
}

export const Button: FunctionalComponent<Props> = ({ onClick, children, size = 'md', variant = 'primary', className = '', style, loading }) => {
    return (
        <button class={`button ${variant} ${size} ${className} ${loading ? 'loading' : ''}`} style={style} onClick={onClick}>
            {loading && <Spinner className="spinner" width={8} />}
            {children}
        </button>
    );
};
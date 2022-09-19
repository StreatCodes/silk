import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size } from './types';

interface Props {
    className?: string;
    children?: ComponentChildren;
    size?: Size,
}

const sizes: Record<Size, string> = {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
}

export const Card: FunctionalComponent<Props> = ({ className = '', children, size = 'md' }) => {
    return (
        <div class={`shadow rounded bg-white ${sizes[size]} ${className}`}>
            {children}
        </div>
    );
};
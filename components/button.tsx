import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';
import classNames from 'classnames';
import { Spinner } from './loader';

interface Props {
    onClick?: () => void;
    children?: ComponentChildren;
    className?: string;
    variant?: Variant;
    size?: Size;
    loading?: boolean;
}

const sizes: Record<Size, string> = {
    xs: 'py-.5 px-1 text-sm',
    sm: 'py-1 px-2 text-sm',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2',
    xl: 'px-5 py-2.5 text-lg'
}

const variants: Record<Variant, string> = {
    primary: 'bg-primary hover:bg-primary-hover',
    secondary: 'bg-secondary hover:bg-secondary-hover',
    success: 'bg-success hover:bg-success-hover',
    warning: 'bg-warning hover:bg-warning-hover',
    critical: 'bg-critical hover:bg-critical-hover'
}

export const Button: FunctionalComponent<Props> = ({ onClick, children, size = 'md', variant = 'primary', className = '', loading }) => {
    const classes = classNames([
        'text-light',
        'relative',
        'items-center',
        'inline-flex',
        'outline-offset-1',
        'shadow',
        'rounded',
        'border-0',
        'focus:outline',
        'outline-primary',
        'outline-2',
        variants[variant],
        sizes[size],
        className
    ]);

    return (
        <button class={classes} onClick={onClick}>
            {loading && <Spinner className="absolute left-0 right-0 mx-auto" />}
            <div className={`inline-block ${loading ? 'opacity-0' : ''}`}>
                {children}
            </div>
        </button>
    );
};
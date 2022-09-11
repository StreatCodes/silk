import { h, FunctionalComponent, ComponentChildren } from 'preact';

interface Props {
    className?: string;
    width?: number;
}

export const Spinner: FunctionalComponent<Props> = ({ className = '', width = 12 }) => {
    const size = `width: ${width}px; height: ${width}px;`;

    return (
        <div className={`border-2 border-subdued border-b-light rounded-full animate-spin ${className}`} style={size} />
    );
};
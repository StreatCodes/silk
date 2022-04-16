import { h, FunctionalComponent, ComponentChildren } from 'preact';

import './loader.css';

interface Props {
    className?: string;
    style?: string;
    width?: number;
}

export const Spinner: FunctionalComponent<Props> = ({ className = '', style, width = 12 }) => {
    const size = `width: ${width}px; height: ${width}px;`;

    return (
        <div class={`spinner ${className}`} style={`${size} ${style}`} />
    );
};
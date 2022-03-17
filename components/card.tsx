import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './card.css';

interface Props {
    onChange?: () => void;
    className?: string;
    style?: string;
    children: ComponentChildren;
}

export const Card: FunctionalComponent<Props> = ({ onChange, className = '', style, children }) => {
    return (
        <div class={`card ${className}`} style={style}>
            {children}
        </div>
    );
};
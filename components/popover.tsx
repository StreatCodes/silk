import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './popover.css';
import { Card } from './card';

interface PopoverProps {
    className?: string;
    style?: string;
    children: ComponentChildren;
    show: boolean;
    onHide: () => void
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    align?: 'start' | 'middle' | 'end'
}

export const Popover: FunctionalComponent<PopoverProps> = ({ className = '', style, children, show, onHide, anchor = 'top', align = 'middle' }) => {

    return (
        <div class={`popover ${show ? '' : 'hidden'} ${anchor} ${align} ${className}`} style={style}>
            <Card>
                {children}
            </Card>
        </div>
    );
};


interface PopoverWrapProps {
    onChange?: () => void;
    className?: string;
    style?: string;
    children: ComponentChildren;
}

export const PopoverWrap: FunctionalComponent<PopoverWrapProps> = ({ className = '', style, children }) => {
    return (
        <div class={`popover-wrap ${className}`} style={style}>
            {children}
        </div>
    );
};


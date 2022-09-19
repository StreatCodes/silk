import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Card } from './card';
import { Alignment, Direction, Size } from './types';

function position(anchor: Direction, align: Alignment): string {
    const pos = `${anchor}-${align}`;

    switch (pos) {
        case 'top-start': return `bottom: calc(100% + 10px);`
        case 'top-middle': return `left: 50%; transform: translateX(-50%);`
        case 'top-end': return `right: 0;`

        case 'bottom-start': return `top: calc(100% + 10px);`
        case 'bottom-middle': return `left: 50%; transform: translateX(-50%);`
        case 'bottom-end': return `right: 0;`

        case 'left-start': return `right: calc(100% + 10px); top: 0;`
        case 'left-middle': return `right: calc(100% + 10px); top: 50%; transform: translateY(-50%);`
        case 'left-end': return `right: calc(100% + 10px); bottom: 0;`

        case 'right-start': return `left: calc(100% + 10px); top: 0;`
        case 'right-middle': return `left: calc(100% + 10px); top: 50%; transform: translateY(-50%);`
        case 'right-end': return `left: calc(100% + 10px); bottom: 0;`
        default: throw new Error(`unexpected position: ${pos}`)
    }
}

interface PopoverProps {
    className?: string;
    children?: ComponentChildren;
    show: boolean;
    anchor?: Direction;
    align?: Alignment;
    size?: Size;
}

export const Popover: FunctionalComponent<PopoverProps> = ({ className = '', children, show, anchor = 'top', align = 'middle', size }) => {
    const styles = position(anchor, align);
    return (
        <div style={styles} class={`absolute ${show ? '' : 'hidden'} ${className}`}>
            <Card size={size}>
                {children}
            </Card>
        </div>
    );
};

interface PopoverWrapProps {
    onChange?: () => void;
    className?: string;
    children?: ComponentChildren;
}

export const PopoverWrap: FunctionalComponent<PopoverWrapProps> = ({ className = '', children }) => {
    return (
        <div class={`relative inline-block ${className}`}>
            {children}
        </div>
    );
};


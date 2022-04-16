import { h, FunctionalComponent, ComponentChildren } from 'preact';
import { Size, Variant } from './types';

import './input.css';

interface InputProps {
    onChange?: () => void;
    value?: string | number;
    className?: string;
    style?: string;
    size?: Size;
    type?: 'text' | 'number' | 'email' | 'password' | 'tel';
    placeholder?: string;
    error?: boolean;
    required?: boolean;
}

export const Input: FunctionalComponent<InputProps> = ({ onChange, value, size = 'md', className = '', style, type = 'text', error = false, placeholder, required }) => {
    return (
        <input type={type} value={value} class={`input ${error ? 'error' : ''} ${size} ${className}`} style={style} placeholder={placeholder} onChange={onChange} required={required} />
    );
};


interface CheckboxProps {
    onChange?: () => void;
    className?: string;
    style?: string;
    label?: string;
    name: string;
    checked?: boolean;
}

export const Checkbox: FunctionalComponent<CheckboxProps> = ({ onChange, label, className = '', style, name, checked }) => {
    return (
        <label class={`checkbox ${className}`} style={style}>
            <input type="checkbox" onChange={onChange} name={name} checked={checked} />
            <span>{label}</span>
        </label>
    );
};


interface RadioProps {
    onChange?: () => void;
    className?: string;
    style?: string;
    label?: string;
    name: string;
    value: string;
}

export const Radio: FunctionalComponent<RadioProps> = ({ onChange, label, className = '', style, name, value }) => {
    return (
        <label class={`radio ${className}`} style={style}>
            <input type="radio" value={value} name={name} onChange={onChange} />
            <span>{label}</span>
        </label>
    );
};
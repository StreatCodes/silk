import { h, FunctionalComponent, ComponentChildren } from 'preact';

interface InputProps {
    onChange?: (v: string | number) => void;
    value?: string | number;
    className?: string;
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'date';
    placeholder?: string;
    error?: boolean;
    required?: boolean;
}

export const Input: FunctionalComponent<InputProps> = ({ onChange, value, className = '', type = 'text', error = false, placeholder, required }) => {
    const classes = `py-2 px-3 outline-none border-solid
        border-2 border-subdued rounded text-base
        ${error ? 'border-critical focus:border-critical-active' : 'focus:border-primary-active'}
        ${className}`;

    return (
        <input type={type} value={value} className={classes} placeholder={placeholder} onChange={e => onChange?.(e.currentTarget.value)} required={required} />
    );
};

interface CheckboxProps {
    onChange?: () => void;
    className?: string;
    label?: string;
    name: string;
    checked?: boolean;
}

export const Checkbox: FunctionalComponent<CheckboxProps> = ({ onChange, label, className = '', name, checked }) => {
    const classes = `appearance-none w-2.5 h-2.5 outline outline-subdued outline-2
    outline-offset-1 rounded-sm block checked:bg-primary checked:outline-primary
    focus:outline-secondary outline-none`

    return (
        <label className={`flex cursor-pointer items-center ${className}`}>
            <input className={classes} type="checkbox" onChange={onChange} name={name} checked={checked} />
            <span className='ml-2'>{label}</span>
        </label>
    );
};

interface RadioProps {
    onChange?: () => void;
    className?: string;
    label?: string;
    name: string;
    value: string;
}

export const Radio: FunctionalComponent<RadioProps> = ({ onChange, label, className = '', name, value }) => {
    const classes = `appearance-none w-2.5 h-2.5 outline outline-subdued outline-2 outline-offset-1
    rounded-full block checked:bg-primary checked:outline-primary focus:outline-secondary outline-none`

    return (
        <label className={`flex cursor-pointer items-center ${className}`}>
            <input className={classes} type="radio" value={value} name={name} onChange={onChange} />
            <span className='ml-2'>{label}</span>
        </label>
    );
};
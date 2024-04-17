import { ButtonHTMLAttributes } from 'react';

type ButtonCustomProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string;
};

export default function ButtonCustom({ children, color ='customBlue', ...props }: ButtonCustomProps) {
    const bgColor = color === 'customBlue' ? `bg-customBlue-dark` : `bg-white`;
    const hoverBgColor = color === 'customBlue' ? `bg-customBlue-semidark` : `bg-${color}-dark`;
    const focusOutlineColor = color === 'customBlue' ? `outline-customTeal-semidark` : `outline-${color}-semidark`;

    return (
        <button {...props} 
            type="submit" 
            className={`flex w-full items-center justify-center rounded-md ${bgColor} px-3 py-2 text-sm font-semibold leading-6 hover:${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${focusOutlineColor}`}>
            {children}
        </button>
    );
}

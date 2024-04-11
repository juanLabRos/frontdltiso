import React from "react";

export default function ButtonCustom({ children, color ='customTeal', onClick }: { children: React.ReactNode, color?: string, onClick?: () => void }) {
  const bgColor = color === 'customTeal' ? `bg-customTeal-dark` : `bg-white`;
  const hoverBgColor = color === 'customTeal' ? `bg-customTeal-semidark` : `bg-${color}`;
  const focusOutlineColor = color === 'customTeal' ? `outline-customTeal-semidark` : `outline-${color}`;
  const textColor = bgColor.includes('customTeal') ? 'text-white' : 'text-black';

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-center rounded-md ${bgColor} ${textColor} px-3 py-2 text-sm font-semibold leading-6 hover:${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${focusOutlineColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


export default function ButtonCustom({ children, color ='customTeal'}: { children: any, color?: string}) {
    const bgColor = color === 'customTeal' ? `bg-customTeal-dark` : `bg-white`;
    const hoverBgColor = color === 'customTeal' ? `bg-customTeal-semidark` : `bg-${color}`;
    const focusOutlineColor = color === 'customTeal' ? `outline-customTeal-semidark` : `outline-${color}`;
  
    return (
      <button type="submit" className={`flex w-full items-center justify-center rounded-md ${bgColor} px-3 py-2 text-sm font-semibold leading-6 hover:${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${focusOutlineColor}`}>
        {children}
      </button>
    );
  }
  
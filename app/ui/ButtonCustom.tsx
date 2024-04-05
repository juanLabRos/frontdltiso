export default function ButtonCustom({ children, color = 'customTeal', tono = 400, action = '', textColor = 'white' }: { children: any, color?: string, tono?: number, action?: any, textColor?: string }) {
    const bgColor = color === 'customTeal' ? `bg-${color}-dark` : `bg-${color}-${tono}`;
    const hoverBgColor = color === 'customTeal' ? `bg-${color}-semidark` : `bg-${color}-${Number(tono)-100}`;
    const focusOutlineColor = color === 'customTeal' ? `outline-${color}-semidark` : `outline-${color}-${Number(tono)-100}`;
  
    return (
      <a onClick={action} className={`flex w-full items-center justify-center rounded-md ${bgColor} px-3 py-2 text-sm font-semibold leading-6 text-${textColor} hover:${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${focusOutlineColor}`}>
        {children}
      </a>
    );
  }
  
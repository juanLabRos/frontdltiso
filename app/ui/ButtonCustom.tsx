export default function ButtonCustom({children, color='customTeal',tono='',action='',textColor='white'}:{children:any,color?:string,tono?:any,action?:any,textColor?:string}){
    return (
        <a onClick={action} className={`flex w-full items-center justify-center rounded-md bg-${color}-${color =='customTeal' ?'dark':tono}  px-3 py-2 
        text-sm font-semibold leading-6 text-${textColor} shadow-sm hover:bg-${color}-${color =='customTeal' ?'semidark':tono-100} focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-${color}-${color =='customTeal' ?'semidark':tono-100}`}>
        {children}
        </a>
        
        
    )
}
export default function InputFomr({label,name,type,placeholder}:{label:string,name:string,type:string,placeholder:string}){
    return (
        <div>
                  <label htmlFor={name} className="block text-sm font-medium leading-6">
                    {label}
                  </label>
                  <div className="mt-2">
                    <input
                      id={name}
                      name={name}
                      type={type}
                      autoComplete={name}
                      required
                      placeholder={placeholder}
                      className="block w-full indent-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    )
}

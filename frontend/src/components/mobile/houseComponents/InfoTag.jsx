

export const InfoTag = ({children, variant = 'default', className=""}) => {
    // console.log(className);
    // if(!children)
    
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        danger: 'text-red-800'
    }

    return (
        <span className={`rounded-full px-3 py-1 ${variants[variant]} ${className}`}>{children}</span>
    )
}

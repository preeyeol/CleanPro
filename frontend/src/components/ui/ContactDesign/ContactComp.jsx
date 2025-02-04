const ContactComp =({htmlFor,label,type,id,inputClassName,placeholder,labelClassName})=>{
return (
    <div>
    <label htmlFor={htmlFor} className={labelClassName}>{label}</label>
    <input type={type} id={id} className={inputClassName} placeholder={placeholder} />
  </div>
)

}

export default ContactComp
// tanpa masukan parameter lagi ini contohnya dengan kata 'param'
const Button = (props) => {
 // nilai default pada '=' setelah nilai variable(const): any
 const {
  bg = "bg-blue-600",
  children = "...",
  text = "text-white",
  className,
  type = "button",
  mt = "mt-4",
  onClick = () => {},
 } = props;
 return (
  <button
   onClick={() => onClick()} 
   className={`w-full py-1.5 ${mt} h-auto px-6 font-semibold rounded-md ${bg} ${text} ${className}`}
   type={type}
  >
   {children}
  </button>
 );
};

const ButtonStore = (param) => {
 // nilai default pada '=' setelah nilai variable(const): any
 const { className = "bg-blue-600", children = "...", onClick, type = "button" } = param;
 return (
  <button
   className={`w-full py-1.5 h-auto px-6 font-semibold rounded-md ${className} text-white`}
   type={type}
   onClick={onClick}
  >
   {children}
  </button>
 );
};

Button.ButtonStore = ButtonStore;

export default Button;
// export default ButtonStore ;

import { Children } from "react";
import Button from "../../Elements/Button/Index";

const CardProduct = (props) => {
 const { children } = props;
 return (
  <div className="max-w-xs min-w-40 bg-sky-950 rounded-lg border-gray-700 border shadow mx-3 my-4 flex flex-col justify-between">
   {children}
  </div>
 );
};

const Header = (head) => {
 const { img } = head;
 return (
  <a href="#">
   <img src={img} alt="product" className="p-8 rounded-t-lg" />
  </a>
 );
};

const Body = (body) => {
 const { LabelSeller, description } = body;
 return (
  <div className="px-5 pb-5 mt-2 h-full">
   <a href="#">
    <h5 className="text-md font-semibold tracking-tight text-white">{LabelSeller}</h5>
   </a>
   <p className="text-sm text-white mt-3">{description}</p>
  </div>
 );
};

const Footer = (foot) => {
 const { price, handleAddToCart, id } = foot;
 return (
  <div className="flex items-center justify-between px-5 pb-5">
   <span className="w-full text-md font-bold text-white">
    {/* Func tolocaleString untuk add mata uang */}
    {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
   </span>
   <Button.ButtonStore onClick={() => handleAddToCart(id)}>Add to cart</Button.ButtonStore>
  </div>
 );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

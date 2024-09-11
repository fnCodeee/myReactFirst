import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/Fragments/Card/CardProduct.jsx";
const MoreElement = ["Header", "Body", "Footer"];
import Button from "../components/Elements/Button/Index.jsx";
import Counter from "../components/Fragments/Counter.jsx";
import "../../public/css/style.css";

const MoreComponent = [
 {
  id: 1,
  img: "/images/imgProduct.jpg",
  sell: "GAMEN TITAN V Mechanical Keyboard",
  text:
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quasi consequatur, quam nihil quod ipsa impedit voluptatem asperiores sint tempora.",
  price: 1000000,
 },
 {
  id: 2,
  img: "/images/imgProduct.jpg",
  sell: "GAMEN TITAN VI",
  text: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  price: 200000,
 },
];

//From VIP
const products = [
 {
  id: 1,
  img: "/images/imgProduct.jpg",
  sell: "GAMEN TITAN V",
  description:
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quasi consequatur, quam nihil quod ipsa impedit voluptatem asperiores sint tempora.",
  price: 1000000,
 },
 {
  id: 2,
  img: "/images/imgProduct.jpg",
  sell: "GAMEN TITAN VI",
  description: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  price: 200000,
 },
 {
  id: 3,
  img: "/images/imgProduct(1).jpg",
  sell: "GAMEN TITAN ELITE",
  description: "maping dari bang Avip, atau disebut Rendering list dari API, By VIP Code",
  price: 1000000,
 },
 {
  id: 4,
  img: "/images/imgProduct(1).jpg",
  sell: "GAMEN TITAN III",
  description: "maping perbaikan",
  price: 1000000,
 },
];

// const Attribut = ["img", "LabelSeller", "description", "price"];

const ProductPage = () => {
 //UseState
 const [cart, setCart] = useState([
  /* Ini kalo panggil objek dengan id dan quantity tertentu bisa ngaruh */
  /**
   * {
   *  id: 1,
   * quantity: 1  ---  (ini contoh)
   * }
   *
   * Output= Mengeksekusi 'id' objek yang di sebutkan (id = 1)
   *  */
 ]);
 const [totalPrice, setTotalPrice] = useState(0);
 
 useEffect(() => {
  setCart(JSON.parse(localStorage.getItem(cart)) || []);
 }, []); //buat ke localStorage

 //useEffect = VIP CODE : 14 UseEffect
 useEffect(() => {
  if (cart.length > 0) {
   const sum = cart.reduce((acumulator, item) => {
    const product = products.find((product) => product.id === item.id);
    return acumulator + product.price * item.quantity;
   }, 0); //0 = index default
   
   setTotalPrice(sum); //eksekusi
   localStorage.setItem("cart", JSON.stringify(cart));
  }
 }, [cart]);

 //  HANDLE FUNC LOGOUT
 const handleLogout = () => {
  localStorage.removeItem("email");
  window.location.href = "/login";
 };

 // HANDLE FUNCTION ADD TO CART
 const handleAddToCart = (id) => {
  alert(`memasukan produk ${id}`);

  if (cart.find((item) => item.id === id)) {
   setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  } else {
   setCart([...cart, { id, quantity: 1 }]);
  }

  /* setTotalPrice(totalPrice + products.find((items) => items.id === id).price); */
 };

 const emailUser = localStorage.getItem("email");
 return (
  <Fragment>
   {/* header */}
   <div className="z-50 drop-shadow-lg flex justify-end w-screen py-5 bg-slate-800 text-white px-10 items-center">
    <p className="text-lg font-semibold">{emailUser}</p>
    <div className="w-24 ml-5">
     <Button mt="mt-0" onClick={handleLogout}>
      Logout
     </Button>
    </div>
   </div>
   {/* Body */}
   <div className="w-full min-h-screen flex flex-row">
    {/* product */}
    <div className="w-4/6 max-h-96 flex flex-wrap justify-center overflow-y-scroll">
     {/* <CardProduct key={MoreComponent[0].id}>
      <CardProduct.Header img={MoreComponent[0].img} />
      <CardProduct.Body LabelSeller={MoreComponent[0].sell} description={MoreComponent[0].text} />
      <CardProduct.Footer id={MoreComponent[0].id} handleAddToCart={handleAddToCart} price={MoreComponent[0].price} />
     </CardProduct>
     <CardProduct key={MoreComponent[1].id}>
      <CardProduct.Header img={MoreComponent[1].img} />
      <CardProduct.Body LabelSeller={MoreComponent[1].sell} description={MoreComponent[1].text} />
      <CardProduct.Footer id={MoreComponent[1].id} handleAddToCart={handleAddToCart} price={MoreComponent[1].price} />
     </CardProduct> */}

     {/* Maping from VIP code,  lebih baik dari pada menggunakan loopingg for */}
     {products.map((product) => (
      <CardProduct key={product.id}>
       <CardProduct.Header img={product.img} />
       <CardProduct.Body LabelSeller={product.sell} description={product.description} />
       <CardProduct.Footer id={product.id} handleAddToCart={handleAddToCart} price={product.price} />
      </CardProduct>
     ))}
    </div>

    {/* cart */}
    <div className="w-2/6 bg-slate-100 border-spacing-2 px-2">
     <div className="shadow-md px-4 py-3 bg-slate-200">
      <h1 className="font-semibold text-3xl text-white drop-shadow-md">Cart</h1>
     </div>

     <h4 className="text-xs font-semibold mt-5">
      <Link to="/perbaikan">Pelajari lebih lanjut (Maping cart)</Link>
     </h4>
     <table className="text-sm w-full mt-2 text-left">
      <thead>
       <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
       </tr>
      </thead>
      <tbody>
       {/* Maping MASIH JADI MISTERI, PELAJARI LAGI */}
       {cart.map((itemsTable) => {
        const produk = products.find((product) => product.id === itemsTable.id);
        const total = produk.price * itemsTable.quantity;
        // const produkMore = MoreComponent.find((produkMore) => produkMore.id === itemsTable.id);
        if (produk) {
         return (
          <tr className="text-sm text-left" key={itemsTable.id}>
           <td>{produk.sell}</td>
           <td>{produk.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
           <td>{itemsTable.quantity}</td>
           <td>{total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
          </tr>
         );
        } else {
         return <h1>GAK</h1>;
        }
       })}
       <tr>
        <td colSpan={3}>
         <b>Total Price</b>
        </td>
        <td>
         {totalPrice.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
         })}
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>

   {/* <Counter /> */}
  </Fragment>
 );
};

export default ProductPage;

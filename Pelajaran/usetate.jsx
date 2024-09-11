import { useState } from "react";
import React from "react";
import Button from "../src/components/Elements/Button/Index";
import { Fragment } from "react";
import CardProduct from "../src/components/Fragments/Card/CardProduct";

// Awalstate
const barang = [
 {
  id: 1,
  name: "baju",
  price: 10000,
  quantity: 1,
 },
 {
  id: 2,
  name: "celana",
  price: 20000,
  quantity: 1,
 },
];

const Hook = () => {
 const [more, setMore] = useState([]);
 const handleAddToCart = (id) => {
  alert(`memasukan produk ${id}`);
  setMore([
   ...more,
   {
    id,
    quantity: 1,
   },
  ]);
 };

 
  /* const barisanAIcodieum = [
    const total = more.reduce((total, item) => total + item.quantity, 0);
    const handleRemove = (id) => {
    setMore(more.filter((item) => item.id !== id));
 };
]*/
 

 return (
  <Fragment>
   <h1 className="text-3xl text-center font-semibold">ULANGI Bab STATE</h1>

   <div className="flex justify-center mt-10">
    <div>
     {barang.map((product) => (
      <CardProduct key={product.id} {...product}>
       <div className="flex p-8 flex-col text-white">
        <h1 className="text-3xl mb-2">{product.name}</h1>
        <h3 className="text-lg">{product.price.toLocaleString("ID-id", { style: "currency", currency: "IDR" })}</h3>
       </div>
       <Button.ButtonStore type="button" onClick={() => handleAddToCart(product.id)}>
        State
       </Button.ButtonStore>
      </CardProduct>
     ))}
    </div>

    <div className=" min-h-screen my-10 flex justify-center">
     <div className="m-1  w-1/2 border-1 border-slate-600">
      <h2 className="text-2xl text-ellipsis">Coba State</h2>
      <table>
       <thead>
        <tr>
         <th>Barang</th>
         <th>Harga</th>
         <th>Quantity</th>
         <th>Total</th>
         <th>HAPUS</th>
        </tr>
       </thead>
       <tbody>
        {more.map((item) => {
         const product = barang.find((i) => i.id === item.id);
         return (
          <tr key={item.id}>
           <td>{product.name}</td>
           <td>{product.price.toLocaleString("ID-id", { style: "currency", currency: "IDR" })}</td>
           <td>{item.quantity}</td>
           <td>{(product.price * item.quantity).toLocaleString("ID-id", { style: "currency", currency: "IDR" })}</td>
           <td>
            <Button.ButtonStore 
            type="button" 
            onClick={() => setMore(more.filter((i) => i.id !== item.id))}
            >
             HAPUS
            </Button.ButtonStore>
           </td>
          </tr>
         );
        })}
       </tbody>
      </table>
     </div>
    </div>
   </div>

   <div className="flex flex-row text-center justify-center gap-9 mt-10">
    <button type="button" onClick={() => Hook()}></button>
   </div>
  </Fragment>
 );
};
//   End State

export default Hook;

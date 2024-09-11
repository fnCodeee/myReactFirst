import React, { Fragment, useState } from "react";
import ButtonStore from "../src/components/Elements/Button/Index";



   
//PERBAIKAN 3
const mapFunc = () => {
    return(
        <div>
            <h1>Perbaikan 3</h1>
        </div>
    )
}


//PERBAIKAN 2
class Counter extends React.Component {
 // Gunakan methode constructor dengan isi super(props) yang berkait dengan props
 constructor(props) {
  super(props);

  // Ini masuk Javascript ES6, untuk mendefinisikan state
  this.state = {
   nomor: 0,
  };
 }
 render() {
  return (
   <div className="flex flex-col text-center w-full items-center my-20">
    <h1 className="text-3xl font-bold">{this.state.nomor}</h1>

    {/* Pada func onCLik, gu8nakan methode setState, dan perhatikan kondisi  isi func dengan variable count(yang di situnya: nomor*/}
    <button
     onClick={() => this.setState({ nomor: this.state.nomor + 1 })}
     className="bg-blue-600 text-white font-semibold w-1/2 px-2 py-1 rounded-lg"
    >
        {/* Methode Perbandingan IF ELSE Tunggal */}
     {this.state.nomor === 0 ? "Take a break" : `Click untuk  ${this.state.nomor} + 1`}
    </button>
   </div>
  );
 }
}

// PERBAIKAN 1
const ButtonPerbaikan = (buttonpropsFunc) => {
 //perhatikan kondisi onClick
 const { onClick = () => {}, type = "button", children, className } = buttonpropsFunc;
 return (
  <button
   type={type}
   onClick={() => onClick()}
   className={`${className} w-1/4 mx-4 py-1.5 h-auto px-6 font-semibold rounded-md bg-blue-600 text-white`}
  >
   {children}
  </button>
 );
};

const H1Func = ({ children }) => {
 // props children = props Tunggal
 return <h1 className="text-lg font-semibold">{children}</h1>;
};

const peringatanbutton = () => {
 alert("Jangan Lupa perbaiki onClick di buttom");
};
const OnclickFunc = () => {
 return (
  <div className="w-full h-auto flex flex-col text-center justify-center">
   <div className="gap-x-5 flex flex-row text-left justify-center">
    <ButtonPerbaikan onClick={peringatanbutton}>Jangan Lupa perbaiki onClick di buttom</ButtonPerbaikan>
   </div>
   <div className="flex flex-col text-left justify-center mt-10">
    <h1>Perbaikan Lengkap</h1>
    <ul className="list-disc ml-5">
     <li>
      <H1Func>Kalo mau Take func = Jangan jauhin dari function yang mau di panggil</H1Func>
     </li>
     <li>
      <H1Func>Kalau props = Dia sifatnya tidak bisa berubah-ubah</H1Func>
     </li>
    </ul>
   </div>
  </div>
 );
};

const Perbaikan = () => {
 return (
  <>
   <div className="flex flex-row text-center justify-center gap-9 mt-10">
    <ButtonPerbaikan className="bg-black" onClick={() => (window.location.href = "/")}>Lobby</ButtonPerbaikan>
   </div>
   <div>
    <h1 className="text-xl font-semibold text-center">Perbaikan 1</h1>
    <OnclickFunc />
   </div>
   <div>
    <h1 className="text-xl font-semibold text-center">Perbaikan 2</h1>
    <Counter className />
   </div>
   <div>
    <h1 className="text-xl font-semibold text-center">Perbaikan 3</h1>

   </div>
  </>
 );
};

export default Perbaikan;

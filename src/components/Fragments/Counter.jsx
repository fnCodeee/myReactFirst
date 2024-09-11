import React from "react";

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Tambah
//                 </button>
//             </div>
//         );
//     }
// }

class Counter extends React.Component {
 // Gunakan methode constructor dengan isi super(props) yang berkait dengan props
 constructor(props) {
  super(props);

  // Ini masuk Javascript ES6, untuk mendefinisikan state
  this.state = {
   nomor: 0,
  };
  console.log("constructor");
 }

 //akan menimpa apa yang ada di dalam constructor, ini berhubungan dengan pemanggilan API
 componentDidMount() {
  this.setState({ nomor: 1 });
  console.log("component did mount");
 }

/* ComponentDidUpdate = dia akan melihat setiap kali ada perubahan, dengan pengkondisian */
 componentDidUpdate(privProps, privState) {
  console.log("component did update");
  if(this.state.nomor === 10) {
      this.setState({ nomor: 0 });
  }
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
     Tombol
    </button>
    {console.log("render")}
   </div>
  );
 }
}

export default Counter;

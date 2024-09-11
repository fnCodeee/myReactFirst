import React from 'react';

const CardProd = {
  Header: () => <div className="card-header">Header</div>,
  Body: () => <div className="card-body">Body</div>,
  Footer: () => <div className="card-footer">Footer</div>,
};

const cardParts = ['Header', 'Body', 'Footer'];

const part = [
  'Header',
  'Body',
  'Footer',];

const Card = () => {
//     return()
//   return (
//     <div className="card">
//       {cardParts.map(part => (
//         <CardProd[part] key={part} />
//       ))}
//     </div>
//   );
};

export default Card;

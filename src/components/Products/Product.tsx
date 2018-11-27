import React from 'react';

export interface Props {
  product_id: number;
  price: number
  name: string;
  image: string;
  onClick?: () => void;
}
export default function Product(props: Props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.image} />
      <div className="container">
        <h3 className="title"><b>{props.name}</b></h3> 
        <h4 className="price">{props.price}$</h4>
      </div>
    </div>
  )
}
import React, { useState, useEffect } from 'react';
import { Props as ProductProps } from './Product';
import { fetchProductDetails, fetchProductDetailsAbort } from '../../api/product';
import './Details.css'

export type Props = ProductProps & { decription: string };

const initialValue: Props = {
  name: '',
  image: '',
  decription: '',
  price: 0,
  product_id: -1,
}

export default function Detail(props: { id: number }) {
  const [detail, setDetail] = useState<Props>(initialValue);
  useEffect(() => {
    fetchProductDetails(props.id).then(result => setDetail(result))
    return () => fetchProductDetailsAbort();
  }, [])
  return (
    <>
      <h1>{detail.name}</h1>
      <img src={detail.image} alt={detail.name}/>
      <h3>Price: {detail.price}$</h3>
      <h4>{detail.decription}</h4>
    </>
  )
}
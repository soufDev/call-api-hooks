import React, { useState, useEffect } from 'react';
import { Props as ProductProps } from './Product';
import { fetchProductDetails, fetchProductDetailsAbort } from '../../api/product';
import './Details.css'

export type Props = ProductProps & { description: string };

const initialValue: Props = {
  name: '',
  image: '',
  description: '',
  price: 0,
  product_id: '',
}

export default function Detail(props: { id: string }) {
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
      <hr/>
      <h4>{detail.description}</h4>
    </>
  )
}
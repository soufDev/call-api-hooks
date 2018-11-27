import React, { useEffect, useState, MouseEvent } from 'react';
import Product, { Props as ProductProps } from './Product';
import { fetchProductList, fetchProductListAbort } from '../../api/product';

export default function Pruducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetchProductList().then(results => setProducts(results));
    return () => fetchProductListAbort();
  }, []);
  
  return (
    <>
      {products && products.map((product, index) =>
        <>
          <Product
            {...product}
            key={product.product_id.toString()}
          />
        </>
      )}
    </> 
  )
}
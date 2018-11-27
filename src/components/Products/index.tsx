import React, { useEffect, useState, useReducer, lazy } from 'react';
import { Props as ProductProps } from './Product';
import { fetchProductList, fetchProductListAbort } from '../../api/product';
import Detail from './Details';
import { RouteComponentProps } from 'react-router';

const Modal = lazy(() => import('./../Modal'));
const Product = lazy(() => import('./Product'));

interface StateReducer {
  open?: boolean;
  content?: JSX.Element;
}

interface ActionReducer {
  type: string;
  content?: JSX.Element;
}

const initialState: StateReducer = { 
  open: false,
  content: <></>,
}

function reducer(state: StateReducer, action: ActionReducer) {
  switch (action.type) {
    case 'OPEN_MODAL': 
    return {
        ...state,
        open: true,
        content: action.content,
      };
    case 'CLOSE_MODAL':
    return {
        ...state,
        open: false,
        content: <></>
      }
    default:
      return state;
  }
}


export default function Pruducts(props: RouteComponentProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [state, dispatch] = useReducer<StateReducer, ActionReducer>(reducer, initialState);
  useEffect(() => {
    fetchProductList().then(results => setProducts(results));
    return () => fetchProductListAbort();
  }, []);

  const handleClickProduct = (id: number) => () => {
    if (window.innerWidth > 1007) {
      dispatch({ type: 'OPEN_MODAL', content: <Detail id={id}  />})
    } else {
      props.history.push('/product/'+id);
    }
  }

  function handleClose() {
    dispatch({ type: 'CLOSE_MODAL'})
  }

  return (
    <>
      {products && products.map((product, index) =>
        <>
          <Product
            {...product}
            key={product.product_id}
            onClick={handleClickProduct(product.product_id)}
          />
        </>
      )}
      <Modal title='Product Description' open={state.open} content={state.content} onClose={handleClose}/>
    </> 
  )
}
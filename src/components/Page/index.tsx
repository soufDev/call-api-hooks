import React from 'react';
import './Page.css';
import { RouteComponentProps } from 'react-router';
import Detail from '../Products/Details';

interface Props {
  content: JSX.Element;
}
function Page(props: Props & RouteComponentProps<{ id: string }>) {
  const { id: id_product } = props.match.params;
  function handleGoHome() {
    props.history.push('/');
  }
  return (
    <div id="page-content">
      <Detail id={id_product} />
      <button className="home-button" onClick={handleGoHome}>
        <span id="home">&#8962; Home</span>
      </button>
    </div>
  )
}

export default Page;
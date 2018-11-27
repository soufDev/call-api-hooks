import React from 'react';
import './Page.css';
import { RouteComponentProps } from 'react-router';
import Detail from '../Products/Details';

interface Props {
  content: JSX.Element;
}
function Page(props: Props & RouteComponentProps<{ id?: string }>) {
  const id_product = Number(props.match.params.id);
  return (
    <div id="page-content">
      <Detail id={id_product} />
    </div>
  )
}

export default Page;
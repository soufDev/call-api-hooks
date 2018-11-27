import React from 'react';
import './Page.css';
import { RouteComponentProps } from 'react-router';
import Detail from '../Products/Details';

interface Props {
  title: string;
  content: JSX.Element;
}
export default function Page(props: Props & RouteComponentProps<{ id?: string }>) {
  const id_product = Number(props.match.params.id);
  return (
    <div id="page-content">
      <h1>{props.title}</h1>
      <Detail id={id_product} />
    </div>
  )
}
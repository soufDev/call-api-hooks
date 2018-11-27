import React from 'react';
import Detail from '../Products/Details';
import './Modal.css';

interface Props {
  open?: boolean;
  title?: string;
  content?: JSX.Element;
}

const defaultProps = {
  open: false,
  title: 'Product Details',
  content: <></>
}
export default function Modal(props: Props = defaultProps) {
  return (
    <div id="myModal" className="modal" style={props.open && { display: 'block' } || { display: 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
          <h2>{props.title}</h2>
        </div>
        <div className="modal-body">
          {props.content}    
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import './Modal.css';

interface Props {
  open?: boolean;
  title?: string;
  content?: JSX.Element;
  onClose: () => void;
}

export default function Modal(props: Props) {
  return (
    <div id="myModal" className="modal" style={props.open && { display: 'block' } || { display: 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.onClose}>&times;</span>
          <h2>{props.title}</h2>
        </div>
        <div className="modal-body">
          {props.content}    
        </div>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import './Modal.css';

interface Props {
  open: boolean;
  title?: string;
  content?: JSX.Element;
  onClose: () => void;
}

const initialValue = 'auto';
export default function Modal(props: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = initialValue;
  })
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
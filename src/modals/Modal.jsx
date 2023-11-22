// import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ setAppHasModal, children }) {
  return createPortal(
    <div
      className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center"
      style={{ backgroundColor: '#111111bd' }}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setAppHasModal(false);
      }}
    >
      {children}
    </div>,
    document.getElementById('modal'),
  );
}

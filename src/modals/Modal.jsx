// import React from 'react';
import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { AppContext } from '../contexts/AppContext';

export function Modal({ children }) {
  const { setAppHasModal } = useContext(AppContext);

  return createPortal(
    <div
      className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center"
      style={{ backgroundColor: '#111111bd' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setAppHasModal(false);
        }
      }}
    >
      {children}
    </div>,
    document.getElementById('modal'),
  );
}

import { createPortal } from 'react-dom';

export default function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div
      className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center"
      style={{ backgroundColor: '#111111bd' }}
    >
      {children}
    </div>,
    document.getElementById('modal')!,
  );
}

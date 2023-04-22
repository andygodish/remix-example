import React from 'react'

export interface OverlayProps {
    
}

const Overlay: React.FC<OverlayProps> = (_props): React.ReactElement => {
  return (
    <div className='text-white fixed left-0 h-full w-full bg-gray-900 opacity-90 z-40'>
    </div>
  );
};

export default Overlay;
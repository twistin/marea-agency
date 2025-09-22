
import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;

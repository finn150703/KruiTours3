import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 bg-slate-100">
      {/* Footer Logo */}
      <img
        src="/fotos website resa/logo.png"
        alt="Krui Trip Indo Logo"
        className="mt-2 h-20 w-20"
      />

      {/* Contact Information */}
      <div className="mt-4 text-center text-gray-700">
        <p className="text-lg font-semibold">Contact Us</p>
        <p className="mt-2">Phone: +62 877-3975-4691</p>
        <p>Email: info@kruitripindo.com</p>
      </div>
    </div>
  );
});

export default Footer;






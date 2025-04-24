
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border py-6">
      <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
            MARIA BLACK
          </h1>
          <span className="ml-3 text-xs md:text-sm uppercase tracking-wider bg-mariablack-cream text-mariablack-charcoal px-2 py-1 rounded">
            Piercing Studio
          </span>
        </div>
        <div>
          <p className="text-sm text-right">
            <span className="block font-semibold">Customer Registration</span>
            <span className="text-muted-foreground">Piercing Services</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

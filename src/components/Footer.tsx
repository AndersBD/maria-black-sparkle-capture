
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-6 mt-10">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Maria Black. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-mariablack-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-mariablack-gold transition-colors">Terms of Service</a>
            <a href="https://www.maria-black.com/dk/" className="text-sm hover:text-mariablack-gold transition-colors">Shop Online</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

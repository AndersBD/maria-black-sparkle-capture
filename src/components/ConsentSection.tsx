
import React from 'react';
import { CustomerData } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ConsentSectionProps {
  data: Partial<CustomerData>;
  onChange: (field: keyof CustomerData, value: boolean) => void;
}

const ConsentSection: React.FC<ConsentSectionProps> = ({ data, onChange }) => {
  return (
    <div className="mb-section">
      <h2 className="section-title">Marketing Preferences</h2>
      
      <div className="bg-muted p-5 rounded-lg mb-6">
        <p className="text-sm mb-4">
          Maria Black would love to keep you updated with piercing aftercare information, 
          exclusive offers, new collections, and events. Please select how you'd like to hear from us:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="emailConsent" 
              checked={data.emailConsent || false}
              onCheckedChange={(checked) => onChange('emailConsent', checked === true)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="emailConsent" className="font-medium">Email Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive styling tips, exclusive offers, and new collection announcements.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="smsConsent" 
              checked={data.smsConsent || false}
              onCheckedChange={(checked) => onChange('smsConsent', checked === true)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="smsConsent" className="font-medium">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Get text alerts for appointments, exclusive deals, and in-store events.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 mt-4">
            <Checkbox 
              id="marketingConsent" 
              checked={data.marketingConsent || false}
              onCheckedChange={(checked) => onChange('marketingConsent', checked === true)}
              className="mt-1"
            />
            <div>
              <Label htmlFor="marketingConsent" className="font-medium">General Marketing Consent</Label>
              <p className="text-sm text-muted-foreground">
                I agree that Maria Black may process my personal data to provide personalized marketing 
                communications in accordance with the <a href="#" className="underline">Privacy Policy</a>. 
                I understand I can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentSection;


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
      <h2 className="section-title">Marketingpræferencer</h2>
      
      <div className="bg-muted p-5 rounded-lg mb-6">
        <p className="text-sm mb-4">
          Maria Black vil gerne holde dig opdateret med information om piercing efterpleje, 
          eksklusive tilbud, nye kollektioner og events. Vælg venligst hvordan du ønsker at høre fra os:
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
              <Label htmlFor="emailConsent" className="font-medium">Email opdateringer</Label>
              <p className="text-sm text-muted-foreground">
                Modtag styling tips, eksklusive tilbud og nyheder om nye kollektioner.
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
              <Label htmlFor="smsConsent" className="font-medium">SMS notifikationer</Label>
              <p className="text-sm text-muted-foreground">
                Få SMS beskeder om aftaler, eksklusive tilbud og butiksevents.
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
              <Label htmlFor="marketingConsent" className="font-medium">Generelt marketingsamtykke</Label>
              <p className="text-sm text-muted-foreground">
                Jeg accepterer, at Maria Black må behandle mine personlige oplysninger for at sende
                personlig markedsføring i henhold til <a href="#" className="underline">Privatlivspolitikken</a>. 
                Jeg forstår, at jeg til enhver tid kan framelde mig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentSection;

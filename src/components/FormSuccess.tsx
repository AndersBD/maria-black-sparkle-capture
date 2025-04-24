
import React from 'react';
import { CustomerData } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface FormSuccessProps {
  data: CustomerData;
  onReset: () => void;
}

const FormSuccess: React.FC<FormSuccessProps> = ({ data, onReset }) => {
  return (
    <div className="text-center py-10 px-4 animate-fade-in">
      <div className="mb-6">
        <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h2 className="text-2xl font-display font-semibold mb-2">Registrering Gennemført</h2>
        <p className="text-muted-foreground mb-6">
          Tak for din registrering hos Maria Black
        </p>
      </div>
      
      <div className="max-w-md mx-auto bg-muted p-6 rounded-lg text-left mb-8">
        <h3 className="font-semibold mb-3 text-lg">Aftaleoversigt</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Navn:</span> {data.firstName} {data.lastName}</p>
          <p><span className="font-medium">Service:</span> {data.service}</p>
          <p><span className="font-medium">Dato & tid:</span> {data.appointmentDate} kl. {data.appointmentTime}</p>
          <p><span className="font-medium">Piercing:</span> {data.piercingLocation} med {data.jewelryType} ({data.jewelryMaterial})</p>
        </div>
      </div>
      
      {(data.emailConsent || data.smsConsent) && (
        <div className="mb-8">
          <p className="text-sm">
            {data.emailConsent && 'Du vil modtage email opdateringer fra Maria Black. '}
            {data.smsConsent && 'Du vil modtage SMS beskeder fra Maria Black. '}
            Du kan til enhver tid framelde dig.
          </p>
        </div>
      )}
      
      <div className="space-x-4">
        <Button 
          onClick={onReset}
          variant="outline" 
          className="px-8"
        >
          Registrer En Ny Kunde
        </Button>
      </div>
    </div>
  );
};

export default FormSuccess;

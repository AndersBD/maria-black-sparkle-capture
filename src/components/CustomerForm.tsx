
import React from 'react';
import { CustomerData } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SignatureField from './SignatureField';

interface CustomerFormProps {
  data: Partial<CustomerData>;
  onChange: (field: keyof CustomerData, value: string | boolean) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ data, onChange }) => {
  return (
    <div className="mb-section">
      <h2 className="section-title">Kundeinformation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="firstName" className="block mb-2">Fornavn *</Label>
          <Input
            id="firstName"
            type="text"
            value={data.firstName || ''}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="input-field"
            required
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="lastName" className="block mb-2">Efternavn *</Label>
          <Input
            id="lastName"
            type="text"
            value={data.lastName || ''}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="input-field"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="email" className="block mb-2">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            className="input-field"
            required
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="phone" className="block mb-2">Telefonnummer *</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            className="input-field"
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <Label htmlFor="birthdate" className="block mb-2">Fødselsdato *</Label>
        <Input
          id="birthdate"
          type="date"
          value={data.birthdate || ''}
          onChange={(e) => onChange('birthdate', e.target.value)}
          className="input-field"
          required
        />
      </div>
      
      <div className="form-group">
        <Label htmlFor="address" className="block mb-2">Adresse</Label>
        <Input
          id="address"
          type="text"
          value={data.address || ''}
          onChange={(e) => onChange('address', e.target.value)}
          className="input-field"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="form-group">
          <Label htmlFor="city" className="block mb-2">By</Label>
          <Input
            id="city"
            type="text"
            value={data.city || ''}
            onChange={(e) => onChange('city', e.target.value)}
            className="input-field"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="postalCode" className="block mb-2">Postnummer</Label>
          <Input
            id="postalCode"
            type="text"
            value={data.postalCode || ''}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className="input-field"
          />
        </div>
        
        <div className="form-group md:col-span-1">
          <Label htmlFor="country" className="block mb-2">Land</Label>
          <select
            id="country"
            value={data.country || 'Denmark'}
            onChange={(e) => onChange('country', e.target.value)}
            className="input-field"
          >
            <option value="Denmark">Danmark</option>
            <option value="Sweden">Sverige</option>
            <option value="Norway">Norge</option>
            <option value="Germany">Tyskland</option>
            <option value="Other">Andet</option>
          </select>
        </div>
      </div>

      <SignatureField 
        value={data.signature}
        onChange={(value) => onChange('signature', value)}
      />
    </div>
  );
};

export default CustomerForm;

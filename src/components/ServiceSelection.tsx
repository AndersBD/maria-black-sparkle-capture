import React, { useState } from 'react';
import { CustomerData, JewelryOption, PiercingLocation } from '@/lib/types';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

interface ServiceSelectionProps {
  data: Partial<CustomerData>;
  onChange: (field: keyof CustomerData, value: string) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ data, onChange }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  
  const services = [
    { id: 'single', name: 'Single Piercing', price: '450 DKK' },
    { id: 'double', name: 'Double Piercing', price: '800 DKK' },
    { id: 'triple', name: 'Triple Piercing', price: '1150 DKK' },
    { id: 'dermal', name: 'Dermal Piercing', price: '650 DKK' },
  ];
  
  const jewelryOptions: JewelryOption[] = [
    { type: 'Stud', materials: ['14k Gold', '18k Gold', 'Surgical Steel', 'Titanium'] },
    { type: 'Hoop', materials: ['14k Gold', '18k Gold', 'Surgical Steel', 'Titanium'] },
    { type: 'Barbell', materials: ['14k Gold', '18k Gold', 'Surgical Steel', 'Titanium'] },
  ];
  
  const piercingLocations: PiercingLocation[] = [
    { area: 'Ear', positions: ['Lobe', 'Helix', 'Tragus', 'Conch', 'Rook', 'Daith', 'Industrial'] },
    { area: 'Face', positions: ['Nostril', 'Septum', 'Eyebrow', 'Bridge', 'Lip', 'Labret'] },
    { area: 'Body', positions: ['Navel', 'Nipple', 'Dermal'] },
  ];
  
  const handleLocationAreaChange = (area: string) => {
    setSelectedLocation(area);
  };
  
  const storeLocations = [
    { id: 'cph-1', name: 'Copenhagen - Pilestræde' },
    { id: 'cph-2', name: 'Copenhagen - Field\'s' },
    { id: 'aarhus', name: 'Aarhus' },
  ];
  
  return (
    <div className="mb-section">
      <h2 className="section-title">Piercing Detaljer</h2>
      
      <div className="form-group">
        <Label className="block mb-3">Vælg Service *</Label>
        <RadioGroup 
          value={data.service || ''} 
          onValueChange={(value) => onChange('service', value)}
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-mariablack-gold transition-colors">
              <RadioGroupItem value={service.id} id={service.id} />
              <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                <span className="font-medium">{service.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">({service.price})</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="jewelryType" className="block mb-2">Smykketype *</Label>
          <select
            id="jewelryType"
            value={data.jewelryType || ''}
            onChange={(e) => onChange('jewelryType', e.target.value)}
            className="input-field"
            required
          >
            <option value="" disabled>Vælg smykketype</option>
            {jewelryOptions.map((option) => (
              <option key={option.type} value={option.type}>{option.type}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <Label htmlFor="jewelryMaterial" className="block mb-2">Smykkemateriale *</Label>
          <select
            id="jewelryMaterial"
            value={data.jewelryMaterial || ''}
            onChange={(e) => onChange('jewelryMaterial', e.target.value)}
            className="input-field"
            required
            disabled={!data.jewelryType}
          >
            <option value="" disabled>Vælg materiale</option>
            {data.jewelryType && jewelryOptions
              .find(opt => opt.type === data.jewelryType)?.materials
              .map(material => (
                <option key={material} value={material}>{material}</option>
              ))
            }
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="piercingArea" className="block mb-2">Piercingområde *</Label>
          <select
            id="piercingArea"
            value={selectedLocation}
            onChange={(e) => handleLocationAreaChange(e.target.value)}
            className="input-field"
            required
          >
            <option value="" disabled>Vælg område</option>
            {piercingLocations.map((location) => (
              <option key={location.area} value={location.area}>{location.area}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <Label htmlFor="piercingLocation" className="block mb-2">Piercingplacering *</Label>
          <select
            id="piercingLocation"
            value={data.piercingLocation || ''}
            onChange={(e) => onChange('piercingLocation', e.target.value)}
            className="input-field"
            required
            disabled={!selectedLocation}
          >
            <option value="" disabled>Vælg placering</option>
            {selectedLocation && piercingLocations
              .find(loc => loc.area === selectedLocation)?.positions
              .map(position => (
                <option key={position} value={position}>{position}</option>
              ))
            }
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="appointmentDate" className="block mb-2">Dato *</Label>
          <Input
            id="appointmentDate"
            type="date"
            value={data.appointmentDate || ''}
            onChange={(e) => onChange('appointmentDate', e.target.value)}
            className="input-field"
            required
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="appointmentTime" className="block mb-2">Tidspunkt *</Label>
          <Input
            id="appointmentTime"
            type="time"
            value={data.appointmentTime || ''}
            onChange={(e) => onChange('appointmentTime', e.target.value)}
            className="input-field"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <Label htmlFor="storeLocation" className="block mb-2">Butikslokation *</Label>
          <select
            id="storeLocation"
            value={data.storeLocation || ''}
            onChange={(e) => onChange('storeLocation', e.target.value)}
            className="input-field"
            required
          >
            <option value="" disabled>Vælg butik</option>
            {storeLocations.map((location) => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <Label htmlFor="piercerName" className="block mb-2">Piercernavn</Label>
          <Input
            id="piercerName"
            type="text"
            value={data.piercerName || ''}
            onChange={(e) => onChange('piercerName', e.target.value)}
            className="input-field"
          />
        </div>
      </div>
      
      <div className="form-group">
        <Label htmlFor="notes" className="block mb-2">Yderligere bemærkninger</Label>
        <textarea
          id="notes"
          value={data.notes || ''}
          onChange={(e) => onChange('notes', e.target.value)}
          className="input-field min-h-[100px] resize-y"
          placeholder="Særlige krav eller information..."
        />
      </div>
    </div>
  );
};

export default ServiceSelection;

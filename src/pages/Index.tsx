import React, { useState } from 'react';
import { CustomerData } from '@/lib/types';
import Header from '@/components/Header';
import CustomerForm from '@/components/CustomerForm';
import ServiceSelection from '@/components/ServiceSelection';
import ConsentSection from '@/components/ConsentSection';
import FormSuccess from '@/components/FormSuccess';
import LoadingButton from '@/components/LoadingButton';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
const Index: React.FC = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState<Partial<CustomerData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (field: keyof CustomerData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'birthdate', 'service', 'jewelryType', 'jewelryMaterial', 'piercingLocation', 'appointmentDate', 'appointmentTime', 'storeLocation'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof CustomerData]);
    if (missingFields.length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      // In a real application, you would send this data to your server
      console.log('Form data submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Registration complete",
        description: "Customer information has been saved."
      });
    }, 1500);
  };
  const resetForm = () => {
    setFormData({});
    setIsSubmitted(false);
  };
  if (isSubmitted) {
    return <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="page-container">
            <FormSuccess data={formData as CustomerData} onReset={resetForm} />
          </div>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="page-container">
          <form onSubmit={handleSubmit}>
            <CustomerForm data={formData} onChange={handleChange} />
            
            <ServiceSelection data={formData} onChange={handleChange} />
            
            <ConsentSection data={formData} onChange={handleChange} />
            
            <div className="flex justify-center mt-8">
              <LoadingButton type="submit" isLoading={isSubmitting} className="bg-mariablack-charcoal hover:bg-black text-white py-3 px-10">Færdiggør bestilling</LoadingButton>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Index;
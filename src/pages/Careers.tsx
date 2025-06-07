import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormEmail } from '../hooks/useFormEmail';
import toast from 'react-hot-toast';

const driverSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(5, 'Invalid phone number'),
  experience: z.string().min(1, 'Required'),
  licenseNumber: z.string().min(1, 'Required')
});

type DriverFormType = z.infer<typeof driverSchema>;

const Careers: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<DriverFormType>({
    resolver: zodResolver(driverSchema),
    mode: 'onChange'
  });
  const { handleSubmit } = methods;
  const { sendEmail } = useFormEmail();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: DriverFormType) => {
    const { success, error } = await sendEmail({
      ...data,
      subject: 'Driver Application'
    });
    if (success) {
      toast.success('Application submitted successfully!');
      methods.reset();
      setStep(1);
    } else {
      toast.error('Something went wrong. Please try again later.');
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Careers</title>
      </Helmet>
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-6">Careers at SPN Logistics</h1>
          <p className="max-w-xl mx-auto mb-8">
            Join our fleet and be part of a growing, dedicated team that values safety and on-time
            performance.
          </p>
        </div>
      </Section>

      <Section title="Benefits">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Competitive Pay', desc: 'Earn top rates per mile plus bonuses.' },
            { title: 'Health & Retirement', desc: 'We offer comprehensive benefits and 401K.' },
            { title: 'Flexible Routes', desc: 'Choose local, regional, or OTR routes.' }
          ].map((benefit, i) => (
            <div key={i} className="bg-white dark:bg-darkBg2 rounded p-4 shadow">
              <h4 className="text-lg font-bold text-primary mb-2">{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Driver Application">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
            {step === 1 && (
              <div className="grid gap-4">
                <div>
                  <label className="block mb-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    {...methods.register('firstName')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    {...methods.register('lastName')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-4">
                <div>
                  <label className="block mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    {...methods.register('email')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-1" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    {...methods.register('phone')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <Button type="button" variant="secondary" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-4">
                <div>
                  <label className="block mb-1" htmlFor="experience">
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    {...methods.register('experience')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.experience && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.experience.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-1" htmlFor="licenseNumber">
                    License Number
                  </label>
                  <input
                    id="licenseNumber"
                    {...methods.register('licenseNumber')}
                    className="w-full p-2 rounded border"
                  />
                  {methods.formState.errors.licenseNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {methods.formState.errors.licenseNumber.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <Button type="button" variant="secondary" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            )}
          </form>
        </FormProvider>
      </Section>
    </>
  );
};

export default Careers;

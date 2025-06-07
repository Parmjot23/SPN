import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormEmail } from '../hooks/useFormEmail';
import Section from '../ui/Section';
import Button from '../ui/Button';

const mapURL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838986407324!2d144.95373631556526!3d-37.81627937975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f9744ef1%3A0xf9b1cae4f743fecd!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1614635252261!5m2!1sen!2sau';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message must be at least 5 characters')
});

type ContactFormType = z.infer<typeof contactSchema>;

// Lazy load for Google Map
const MapEmbed = React.lazy(() => {
  return new Promise<{ default: React.FC }>((resolve) => {
    setTimeout(() => {
      resolve({
        default: () => (
          <iframe
            title="SPN Logistics HQ"
            src={mapURL}
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        )
      });
    }, 500); // Artificial delay for demo
  });
});

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });
  const { sendEmail } = useFormEmail();

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    const { success, error } = await sendEmail({
      ...data,
      subject: 'Contact Form Submission'
    });
    if (success) {
      toast.success('Message sent successfully!');
    } else {
      toast.error('Something went wrong. Please try again later.');
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Contact</title>
      </Helmet>
      <Section>
        <h1 className="text-3xl font-bold text-primary text-center mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="font-semibold">Headquarters</h3>
              <p>1059 Chem. Legault, Les Cèdres, QC J7T 1N8</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Yard</h3>
              <p>1059 Chem. Legault, Les Cèdres, QC J7T 1N8</p>
            </div>
            <div>
              <h3 className="font-semibold">24/7 Dispatch</h3>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full p-2 rounded border"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                {...register('email')}
                className="w-full p-2 rounded border"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register('message')}
                className="w-full p-2 rounded border"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </Section>
      <Section title="Find Us">
        <Suspense fallback={<div className="h-96 bg-gray-200" />}>
          <MapEmbed />
        </Suspense>
      </Section>
    </>
  );
};

export default Contact;

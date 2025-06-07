import emailjs from 'emailjs-com';

export const useFormEmail = () => {
  const sendEmail = async (formValues: Record<string, any>) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formValues,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  return { sendEmail };
};

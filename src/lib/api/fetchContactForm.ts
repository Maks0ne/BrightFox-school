import axios from 'axios';

export const fetchContactForm = async (values: {
  name: string;
  email: string;
  phone: string;
  course?: string;
  message?: string;
}) => {
  const response = await axios.post('/api/contactForm', values);
  return response.data;
};

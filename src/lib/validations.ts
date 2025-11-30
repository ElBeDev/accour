import { z } from 'zod';

// Validación para formulario de contacto
export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

// Validación para formulario de cotización
export const quoteFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().min(10, 'Teléfono debe tener al menos 10 dígitos'),
  industry: z.string().min(1, 'Selecciona una industria'),
  service: z.string().min(1, 'Selecciona un servicio'),
  quantity: z.string().min(1, 'Especifica la cantidad aproximada'),
  description: z.string().min(20, 'La descripción debe tener al menos 20 caracteres'),
  timeline: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;

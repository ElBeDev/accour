'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES, INDUSTRIES } from '@/lib/constants';
import { contactFormSchema, quoteFormSchema, ContactFormData, QuoteFormData } from '@/lib/validations';
import MapboxMap from '@/components/ui/mapbox-map';

export default function ContactoPage() {
  const [contactStatus, setContactStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [quoteStatus, setQuoteStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const quoteForm = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onContactSubmit = async (data: ContactFormData) => {
    try {
      // Crear mensaje para mailto
      const subject = `Contacto de ${data.name} - ${data.subject}`;
      const body = `
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Asunto: ${data.subject}

Mensaje:
${data.message}
      `.trim();
      
      const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setContactStatus({ type: 'success', message: '¡Gracias por contactarnos! Se ha abierto tu cliente de correo.' });
      contactForm.reset();
    } catch (error) {
      setContactStatus({ type: 'error', message: 'Error al procesar el mensaje. Por favor, contacta directamente por teléfono.' });
    }
  };

  const onQuoteSubmit = async (data: QuoteFormData) => {
    try {
      // Crear mensaje para mailto
      const subject = `Solicitud de Cotización - ${data.name}`;
      const body = `
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Empresa: ${data.company}
Servicio: ${data.service}
Industria: ${data.industry}

Descripción del proyecto:
${data.description}

Cantidad: ${data.quantity}
${data.timeline ? `Tiempo estimado: ${data.timeline}` : ''}
      `.trim();
      
      const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setQuoteStatus({ type: 'success', message: '¡Gracias por tu solicitud! Se ha abierto tu cliente de correo.' });
      quoteForm.reset();
    } catch (error) {
      setQuoteStatus({ type: 'error', message: 'Error al procesar la solicitud. Por favor, contacta directamente por teléfono.' });
    }
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Contáctanos
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Estamos Listos para Atenderte
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Envíanos tu consulta o solicita una cotización. Responderemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Formularios */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
            {/* Formularios */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="contacto" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="contacto">Contacto General</TabsTrigger>
                  <TabsTrigger value="cotizacion">Solicitar Cotización</TabsTrigger>
                </TabsList>

                {/* Formulario de Contacto */}
                <TabsContent value="contacto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Formulario de Contacto</CardTitle>
                      <CardDescription>
                        Déjanos tu mensaje y nos pondremos en contacto contigo
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {contactStatus && (
                        <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                          contactStatus.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                          {contactStatus.type === 'success' ? (
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                          )}
                          <p className="text-sm">{contactStatus.message}</p>
                        </div>
                      )}
                      <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contact-name">Nombre completo *</Label>
                            <Input 
                              id="contact-name" 
                              {...contactForm.register('name')}
                              placeholder="Juan Pérez" 
                            />
                            {contactForm.formState.errors.name && (
                              <p className="text-sm text-red-600">{contactForm.formState.errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contact-email">Correo electrónico *</Label>
                            <Input 
                              id="contact-email" 
                              type="email"
                              {...contactForm.register('email')}
                              placeholder="juan@empresa.com" 
                            />
                            {contactForm.formState.errors.email && (
                              <p className="text-sm text-red-600">{contactForm.formState.errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contact-phone">Teléfono *</Label>
                            <Input 
                              id="contact-phone" 
                              {...contactForm.register('phone')}
                              placeholder="(555) 123-4567" 
                            />
                            {contactForm.formState.errors.phone && (
                              <p className="text-sm text-red-600">{contactForm.formState.errors.phone.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contact-subject">Asunto *</Label>
                            <Input 
                              id="contact-subject" 
                              {...contactForm.register('subject')}
                              placeholder="Consulta sobre servicios" 
                            />
                            {contactForm.formState.errors.subject && (
                              <p className="text-sm text-red-600">{contactForm.formState.errors.subject.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-message">Mensaje *</Label>
                          <Textarea
                            id="contact-message"
                            {...contactForm.register('message')}
                            rows={6}
                            placeholder="Describe tu consulta..."
                          />
                          {contactForm.formState.errors.message && (
                            <p className="text-sm text-red-600">{contactForm.formState.errors.message.message}</p>
                          )}
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={contactForm.formState.isSubmitting}
                        >
                          {contactForm.formState.isSubmitting ? (
                            'Enviando...'
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Enviar Mensaje
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Formulario de Cotización */}
                <TabsContent value="cotizacion">
                  <Card>
                    <CardHeader>
                      <CardTitle>Solicitar Cotización</CardTitle>
                      <CardDescription>
                        Proporciona los detalles de tu proyecto para una cotización precisa
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {quoteStatus && (
                        <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                          quoteStatus.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                          {quoteStatus.type === 'success' ? (
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                          )}
                          <p className="text-sm">{quoteStatus.message}</p>
                        </div>
                      )}
                      <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="quote-name">Nombre completo *</Label>
                            <Input 
                              id="quote-name" 
                              {...quoteForm.register('name')}
                              placeholder="Juan Pérez" 
                            />
                            {quoteForm.formState.errors.name && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quote-company">Empresa *</Label>
                            <Input 
                              id="quote-company" 
                              {...quoteForm.register('company')}
                              placeholder="Empresa SA de CV" 
                            />
                            {quoteForm.formState.errors.company && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.company.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="quote-email">Correo electrónico *</Label>
                            <Input 
                              id="quote-email" 
                              type="email"
                              {...quoteForm.register('email')}
                              placeholder="juan@empresa.com" 
                            />
                            {quoteForm.formState.errors.email && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.email.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quote-phone">Teléfono *</Label>
                            <Input 
                              id="quote-phone" 
                              {...quoteForm.register('phone')}
                              placeholder="(555) 123-4567" 
                            />
                            {quoteForm.formState.errors.phone && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="quote-industry">Industria *</Label>
                            <Select 
                              onValueChange={(value) => quoteForm.setValue('industry', value)}
                            >
                              <SelectTrigger id="quote-industry">
                                <SelectValue placeholder="Selecciona tu industria" />
                              </SelectTrigger>
                              <SelectContent>
                                {INDUSTRIES.map((industry) => (
                                  <SelectItem key={industry.id} value={industry.name}>
                                    {industry.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {quoteForm.formState.errors.industry && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.industry.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quote-service">Servicio requerido *</Label>
                            <Select 
                              onValueChange={(value) => quoteForm.setValue('service', value)}
                            >
                              <SelectTrigger id="quote-service">
                                <SelectValue placeholder="Selecciona un servicio" />
                              </SelectTrigger>
                              <SelectContent>
                                {SERVICES.map((service) => (
                                  <SelectItem key={service.id} value={service.title}>
                                    {service.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {quoteForm.formState.errors.service && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.service.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="quote-quantity">Cantidad aproximada *</Label>
                            <Input 
                              id="quote-quantity" 
                              {...quoteForm.register('quantity')}
                              placeholder="ej: 100 piezas mensuales" 
                            />
                            {quoteForm.formState.errors.quantity && (
                              <p className="text-sm text-red-600">{quoteForm.formState.errors.quantity.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quote-timeline">Tiempo estimado de entrega</Label>
                            <Input 
                              id="quote-timeline" 
                              {...quoteForm.register('timeline')}
                              placeholder="ej: 2 semanas" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quote-description">Descripción del proyecto *</Label>
                          <Textarea
                            id="quote-description"
                            {...quoteForm.register('description')}
                            rows={6}
                            placeholder="Describe las piezas, dimensiones, acabados deseados, colores, etc..."
                          />
                          {quoteForm.formState.errors.description && (
                            <p className="text-sm text-red-600">{quoteForm.formState.errors.description.message}</p>
                          )}
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={quoteForm.formState.isSubmitting}
                        >
                          {quoteForm.formState.isSubmitting ? (
                            'Enviando...'
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Solicitar Cotización
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-gray-600 hover:text-primary"
                      >
                        {CONTACT_INFO.phone || '+52 123 456 7890'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-gray-600 hover:text-primary break-all"
                      >
                        {CONTACT_INFO.email || 'contacto@accour.com'}
                      </a>
                    </div>
                  </div>

                  {CONTACT_INFO.whatsapp && (
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a
                          href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary"
                        >
                          Enviar mensaje
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Dirección</h4>
                      <p className="text-gray-600">
                        {CONTACT_INFO.address || 'Dirección por definir'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Horario</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-linear-to-br from-primary to-primary/90 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">¿Necesitas ayuda inmediata?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Llámanos directamente o envíanos un mensaje por WhatsApp para atención prioritaria.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar Ahora
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="h-96">
        <MapboxMap 
          address={CONTACT_INFO.address}
          latitude={parseFloat(process.env.NEXT_PUBLIC_LATITUDE || '20.3881')}
          longitude={parseFloat(process.env.NEXT_PUBLIC_LONGITUDE || '-99.9964')}
          className="h-full w-full"
        />
      </section>
    </main>
  );
}

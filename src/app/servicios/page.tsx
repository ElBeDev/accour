import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Servicios de Pintura Electrostática',
  description: 'Servicios profesionales de pintura electrostática en polvo, recubrimiento industrial, tratamiento de superficies y protección anticorrosiva.',
};

export default function ServiciosPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Servicios Profesionales
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Soluciones Completas en Pintura Electrostática
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ofrecemos servicios especializados de pintura electrostática y recubrimientos industriales 
              con la más alta calidad y durabilidad del mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-linear-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Características */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button asChild className="w-full" size="lg">
                        <Link href={service.href}>
                          Ver Detalles
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              ¿Por Qué Elegir Nuestros Servicios?
            </h2>
            <p className="text-lg text-gray-600">
              Experiencia, tecnología y compromiso con la calidad en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Experiencia Comprobada',
                description: 'Años de trayectoria en el sector industrial con cientos de proyectos exitosos.',
              },
              {
                title: 'Tecnología de Punta',
                description: 'Equipos modernos y procesos certificados para garantizar la máxima calidad.',
              },
              {
                title: 'Garantía de Calidad',
                description: 'Control de calidad riguroso en cada etapa del proceso de aplicación.',
              },
              {
                title: 'Asesoría Técnica',
                description: 'Equipo de expertos para orientarte en la mejor solución para tu proyecto.',
              },
              {
                title: 'Tiempos Competitivos',
                description: 'Entrega rápida sin comprometer la calidad del acabado final.',
              },
              {
                title: 'Precios Justos',
                description: 'Cotizaciones transparentes y competitivas según tus necesidades.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            ¿Listo para tu Proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicita una cotización gratuita y sin compromiso. Nuestro equipo te orientará 
            en la mejor solución para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary/10 border-primary/20 text-white hover:bg-white hover:text-primary"
            >
              <Link href="/proceso">Ver Nuestro Proceso</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

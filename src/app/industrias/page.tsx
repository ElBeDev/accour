import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industrias que Servimos',
  description: 'Soluciones de pintura electrostática para automotriz, maquinaria industrial, muebles metálicos, construcción, electrodomésticos y herrería.',
};

export default function IndustriasPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Sectores Industriales
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Soluciones para Múltiples Industrias
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experiencia comprobada atendiendo las necesidades específicas de diversos 
              sectores industriales y comerciales.
            </p>
          </div>
        </div>
      </section>

      {/* Industrias Detalladas */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Imagen Placeholder */}
                  <div
                    className={`relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden ${
                      isEven ? '' : 'lg:order-2'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-gray-500 font-medium text-lg">{industry.name}</p>
                        <p className="text-sm text-gray-400">Imagen de referencia</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <Badge variant="secondary" className="mb-4">
                      {industry.name}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Aplicaciones */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
                        Aplicaciones principales:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.applications.map((app, i) => (
                          <Badge key={i} variant="outline">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Ejemplos */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Productos típicos:
                      </h4>
                      <ul className="space-y-2">
                        {industry.examples.map((example, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="text-secondary mr-2 mt-1">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild size="lg">
                      <Link href="/contacto">
                        Solicitar Cotización
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios por Industria */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beneficios Clave por Sector
            </h2>
            <p className="text-lg text-gray-600">
              Cada industria obtiene ventajas específicas con nuestro proceso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Automotriz',
                benefits: [
                  'Resistencia a temperaturas extremas',
                  'Acabado de calidad OEM',
                  'Protección UV superior',
                  'Variedad de colores y texturas',
                ],
              },
              {
                industry: 'Maquinaria Industrial',
                benefits: [
                  'Alta resistencia mecánica',
                  'Protección anticorrosiva',
                  'Durabilidad en ambientes hostiles',
                  'Fácil mantenimiento',
                ],
              },
              {
                industry: 'Muebles Metálicos',
                benefits: [
                  'Acabados estéticos superiores',
                  'Amplia gama de colores',
                  'Resistencia al uso diario',
                  'No amarillean con el tiempo',
                ],
              },
              {
                industry: 'Construcción',
                benefits: [
                  'Resistencia a intemperie',
                  'No se descascara',
                  'Larga vida útil',
                  'Bajo mantenimiento',
                ],
              },
              {
                industry: 'Electrodomésticos',
                benefits: [
                  'Acabado uniforme y liso',
                  'Resistencia a químicos domésticos',
                  'Fácil limpieza',
                  'Certificaciones de seguridad',
                ],
              },
              {
                industry: 'Herrería',
                benefits: [
                  'Protección contra oxidación',
                  'Acabados decorativos',
                  'Resistencia estructural',
                  'Versatilidad de aplicación',
                ],
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Resultados Comprobados
            </h2>
            <p className="text-lg text-gray-600">
              Cientos de empresas confían en nuestra experiencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'm² Semanales' },
              { value: '150+', label: 'Empresas Satisfechas' },
              { value: '20+', label: 'Años de Experiencia' },
              { value: '8', label: 'Sectores Atendidos' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Tu Industria Necesita Recubrimiento Profesional?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos para una asesoría personalizada y descubre cómo podemos 
              ayudarte con tus proyectos específicos.
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
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

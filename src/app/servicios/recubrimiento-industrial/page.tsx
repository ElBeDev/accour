import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Clock,
  Settings,
  TrendingUp,
  Users,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recubrimiento Industrial',
  description: 'Servicio de recubrimiento industrial para grandes volúmenes. Tratamiento profesional de piezas metálicas para diversos sectores con tiempos de entrega optimizados.',
};

export default function RecubrimientoIndustrialPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Soluciones Industriales
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Recubrimiento Industrial a Gran Escala
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tratamiento profesional de piezas metálicas para manufactura y producción en serie. 
              Capacidad para grandes volúmenes sin comprometer calidad.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre el Servicio */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Factory className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Producción Industrial</p>
                  <p className="text-sm text-gray-400">Línea de producción</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Recubrimientos para Manufactura
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nuestro servicio de recubrimiento industrial está diseñado específicamente para 
                  empresas manufactureras que requieren tratar grandes volúmenes de piezas con 
                  consistencia y calidad garantizada.
                </p>
                <p>
                  Contamos con líneas automatizadas de última generación, cabinas de aplicación 
                  profesionales y hornos industriales de gran capacidad que nos permiten procesar 
                  desde pequeños lotes hasta producciones continuas.
                </p>
                <p className="font-semibold text-primary">
                  Ideal para empresas que requieren recubrimientos recurrentes con estándares 
                  industriales estrictos y tiempos de entrega predecibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Capacidades
            </h2>
            <p className="text-lg text-gray-600">
              Infraestructura profesional para atender sus necesidades industriales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: 'Equipamiento Profesional',
                description: 'Líneas automatizadas, cabinas de última generación y hornos industriales de gran capacidad.',
              },
              {
                icon: TrendingUp,
                title: 'Alto Volumen',
                description: 'Capacidad para procesar desde 100 hasta 10,000+ piezas mensuales según requerimientos.',
              },
              {
                icon: Clock,
                title: 'Tiempos Garantizados',
                description: 'Planeación de producción eficiente con tiempos de entrega predecibles y cumplidos.',
              },
              {
                icon: ShieldCheck,
                title: 'Normas Industriales',
                description: 'Cumplimiento de especificaciones ASTM, ISO y normas de calidad internacionales.',
              },
              {
                icon: Users,
                title: 'Equipo Especializado',
                description: 'Personal técnico capacitado en procesos industriales con años de experiencia.',
              },
              {
                icon: Factory,
                title: 'Versatilidad',
                description: 'Procesamiento de piezas de diversos tamaños, desde componentes pequeños hasta estructuras grandes.',
              },
            ].map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sectores que Atendemos
            </h2>
            <p className="text-lg text-gray-600">
              Experiencia comprobada en múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                sector: 'Automotriz',
                items: ['Componentes de carrocería', 'Rines y llantas', 'Piezas de motor', 'Accesorios'],
              },
              {
                sector: 'Maquinaria',
                items: ['Carcasas de equipos', 'Paneles de control', 'Estructuras metálicas', 'Componentes'],
              },
              {
                sector: 'Muebles y Mobiliario',
                items: ['Líneas de producción', 'Muebles de oficina', 'Estanterías', 'Estructuras'],
              },
              {
                sector: 'Construcción',
                items: ['Perfiles arquitectónicos', 'Ventanería', 'Herrería', 'Fachadas'],
              },
              {
                sector: 'Electrodomésticos',
                items: ['Línea blanca', 'Gabinetes', 'Paneles', 'Componentes'],
              },
              {
                sector: 'Equipamiento',
                items: ['Equipo comercial', 'Displays', 'Stands', 'Exhibidores'],
              },
            ].map((sector, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{sector.sector}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sector.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ventajas para su Empresa
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Reducción de costos vs pintura en planta',
              'Sin inversión en equipo y personal',
              'Calidad consistente garantizada',
              'Flexibilidad en volúmenes',
              'Cumplimiento de normativas',
              'Asesoría técnica especializada',
              'Reportes de calidad detallados',
              'Trazabilidad de lotes',
              'Certificados de conformidad',
            ].map((advantage, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700">{advantage}</span>
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
              ¿Su Empresa Necesita un Socio Confiable?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Optimice su producción con nuestro servicio de recubrimiento industrial
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
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

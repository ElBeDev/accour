import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Droplets, 
  Palette,
  Clock,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pintura Electrostática en Polvo',
  description: 'Servicio profesional de pintura electrostática en polvo. Acabados duraderos, resistentes y de alta calidad para metal. Amplia gama de colores y texturas.',
};

export default function PinturaElectrostaticaPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Servicio Premium
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pintura Electrostática en Polvo
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Aplicación profesional de recubrimientos en polvo con acabados personalizados, 
              máxima durabilidad y resistencia superior.
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

      {/* Qué es */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es la Pintura Electrostática en Polvo?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  La pintura electrostática en polvo es un proceso de recubrimiento avanzado que 
                  utiliza partículas de polvo termoendurecible cargadas eléctricamente para adherirse 
                  a superficies metálicas.
                </p>
                <p>
                  Este método revolucionario ofrece acabados superiores en calidad, durabilidad y 
                  resistencia comparado con la pintura líquida tradicional, además de ser más 
                  ecológico al no utilizar solventes.
                </p>
                <p className="font-semibold text-primary">
                  Es la solución ideal para recubrimientos industriales y comerciales que requieren 
                  máxima protección y acabados impecables.
                </p>
              </div>
            </div>

            <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Proceso de Aplicación</p>
                  <p className="text-sm text-gray-400">Imagen del proceso electrostático</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Beneficios */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ventajas del Recubrimiento Electrostático
            </h2>
            <p className="text-lg text-gray-600">
              Tecnología superior que ofrece beneficios inigualables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Durabilidad Extrema',
                description: 'Resistencia superior a rayones, impactos, corrosión y desgaste por uso.',
              },
              {
                icon: Droplets,
                title: 'Resistente a Químicos',
                description: 'Protección contra solventes, aceites, ácidos y productos químicos industriales.',
              },
              {
                icon: Palette,
                title: 'Amplia Gama de Colores',
                description: 'Miles de colores RAL disponibles con acabados mate, brillante, texturizado o metálico.',
              },
              {
                icon: CheckCircle2,
                title: 'Acabado Uniforme',
                description: 'Cobertura perfecta sin escurrimientos, burbujas o irregularidades.',
              },
              {
                icon: Clock,
                title: 'Secado Rápido',
                description: 'Proceso de curado rápido que permite tiempos de entrega reducidos.',
              },
              {
                icon: Award,
                title: 'Ecológico',
                description: 'Cero emisiones de VOC, sin solventes, recuperable al 98% sin desperdicio.',
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de Aplicación
            </h2>
            <p className="text-lg text-gray-600">
              Procedimiento profesional en 4 etapas garantizando resultados perfectos
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Preparación y Limpieza',
                description: 'Desengrase químico profundo, fosfatado y enjuague completo para garantizar adherencia óptima del recubrimiento.',
                items: ['Desengrase alcalino', 'Fosfatado anticorrosivo', 'Enjuague con agua desionizada', 'Secado en horno'],
              },
              {
                step: '02',
                title: 'Aplicación Electrostática',
                description: 'Las partículas de polvo se cargan eléctricamente y se aplican mediante pistolas especializadas, adhiriéndose uniformemente a la pieza.',
                items: ['Carga electrostática del polvo', 'Aplicación uniforme por atracción', 'Cobertura total sin desperdicio', 'Control de espesor'],
              },
              {
                step: '03',
                title: 'Curado en Horno',
                description: 'Las piezas se hornean a temperatura controlada (160-220°C) para fundir y polimerizar el polvo, creando un acabado resistente.',
                items: ['Horno de convección industrial', 'Temperatura precisa controlada', 'Fusión y endurecimiento', 'Enfriamiento gradual'],
              },
              {
                step: '04',
                title: 'Inspección de Calidad',
                description: 'Control de calidad riguroso verificando espesor, adherencia, acabado y apariencia visual antes de la entrega.',
                items: ['Inspección visual 100%', 'Medición de espesores', 'Prueba de adherencia', 'Verificación de color'],
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Aplicaciones Industriales
            </h2>
            <p className="text-lg text-gray-600">
              Ideal para múltiples sectores y productos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Piezas automotrices',
              'Maquinaria industrial',
              'Muebles metálicos',
              'Perfiles de aluminio',
              'Electrodomésticos',
              'Herrería y estructuras',
              'Equipo de oficina',
              'Gabinetes eléctricos',
              'Luminarias',
              'Bicicletas y componentes',
              'Equipo de gimnasio',
              'Displays y exhibidores',
            ].map((app, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-700">{app}</span>
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
              ¿Listo para Mejorar tus Acabados?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Obtén un recubrimiento de calidad superior con nuestra pintura electrostática
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

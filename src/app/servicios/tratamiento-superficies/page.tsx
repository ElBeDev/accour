import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  Sparkles,
  Beaker,
  Waves,
  Target,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tratamiento de Superficies',
  description: 'Preparación profesional de superficies metálicas: limpieza, desengrase, fosfatado y pretratamiento para máxima adherencia y protección anticorrosiva.',
};

export default function TratamientoSuperficiesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Preparación Profesional
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tratamiento de Superficies
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Preparación completa de superficies metálicas con procesos químicos avanzados 
              para garantizar adherencia perfecta y máxima protección.
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

      {/* Importancia */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                La Base de un Acabado Perfecto
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  El tratamiento de superficies es la etapa más crítica del proceso de recubrimiento. 
                  Una preparación inadecuada compromete la adherencia, durabilidad y apariencia del acabado final.
                </p>
                <p>
                  Nuestro proceso de tratamiento químico elimina contaminantes, aceites, óxidos y 
                  crea una capa de conversión química que mejora significativamente la adherencia 
                  del recubrimiento y proporciona protección anticorrosiva adicional.
                </p>
                <p className="font-semibold text-primary">
                  Un tratamiento profesional puede aumentar la vida útil del recubrimiento 
                  hasta 10 veces comparado con una preparación deficiente.
                </p>
              </div>
            </div>

            <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Droplets className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Proceso de Tratamiento</p>
                  <p className="text-sm text-gray-400">Limpieza química profunda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Etapas del Tratamiento
            </h2>
            <p className="text-lg text-gray-600">
              Proceso completo en 5 etapas para preparación óptima
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: 'Desengrase Alcalino',
                description: 'Remoción de aceites, grasas, lubricantes y contaminantes orgánicos mediante soluciones alcalinas calientes.',
                details: [
                  'Temperatura controlada 60-80°C',
                  'pH optimizado para máxima eficiencia',
                  'Remoción de aceites de formado y manufactura',
                  'Preparación para siguientes etapas',
                ],
              },
              {
                icon: Waves,
                title: 'Enjuague',
                description: 'Lavado con agua para eliminar residuos del desengrase y preparar para el fosfatado.',
                details: [
                  'Agua filtrada y controlada',
                  'Eliminación total de residuos alcalinos',
                  'Control de pH neutral',
                  'Preparación para conversión química',
                ],
              },
              {
                icon: Beaker,
                title: 'Fosfatado',
                description: 'Creación de una capa de conversión química de fosfato de zinc o hierro que mejora adherencia y protege contra corrosión.',
                details: [
                  'Capa cristalina de fosfato metálico',
                  'Barrera anticorrosiva adicional',
                  'Mejora de adherencia del recubrimiento',
                  'Protección en caso de daño al acabado',
                ],
              },
              {
                icon: Droplets,
                title: 'Enjuague Final',
                description: 'Lavado con agua desionizada para eliminar cualquier residuo y sales antes del secado.',
                details: [
                  'Agua desionizada ultra pura',
                  'Eliminación de sales y químicos',
                  'Prevención de manchas',
                  'Superficie lista para secado',
                ],
              },
              {
                icon: Target,
                title: 'Secado',
                description: 'Secado completo en horno para eliminar toda la humedad antes de la aplicación del recubrimiento.',
                details: [
                  'Temperatura controlada',
                  'Eliminación total de humedad',
                  'Superficie lista para pintura',
                  'Control de calidad visual',
                ],
              },
            ].map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <stage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">
                        Etapa {index + 1}
                      </div>
                      <CardTitle className="text-2xl">{stage.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  <ul className="space-y-2">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beneficios del Tratamiento Profesional
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Adherencia Superior',
                description: 'El recubrimiento se adhiere perfectamente sin riesgo de desprendimiento o descascaramiento.',
              },
              {
                icon: Award,
                title: 'Durabilidad Extendida',
                description: 'La vida útil del acabado aumenta significativamente gracias a la preparación óptima.',
              },
              {
                icon: CheckCircle2,
                title: 'Acabado Uniforme',
                description: 'Superficie perfectamente limpia garantiza aplicación uniforme sin defectos.',
              },
              {
                icon: Droplets,
                title: 'Protección Anticorrosiva',
                description: 'El fosfatado crea una barrera adicional contra la oxidación y corrosión.',
              },
              {
                icon: Sparkles,
                title: 'Sin Contaminantes',
                description: 'Eliminación total de aceites, óxidos y contaminantes que comprometen calidad.',
              },
              {
                icon: Beaker,
                title: 'Proceso Controlado',
                description: 'Parámetros monitoreados constantemente para resultados consistentes.',
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

      {/* Tipos de Metal */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tratamos Todo Tipo de Metales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Acero al carbón',
              'Acero inoxidable',
              'Aluminio',
              'Hierro',
              'Galvanizado',
              'Zinc',
              'Aleaciones metálicas',
              'Metales ferrosos',
            ].map((metal, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-700 font-medium">{metal}</span>
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
              Garantice la Calidad desde la Base
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Un tratamiento profesional es la clave para acabados duraderos y de calidad
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

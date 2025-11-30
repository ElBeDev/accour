import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Droplet,
  Sun,
  Wind,
  Zap,
  Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Protección Anticorrosiva',
  description: 'Recubrimientos especializados anticorrosivos para ambientes extremos. Máxima protección contra oxidación, corrosión y agentes agresivos.',
};

export default function ProteccionAnticorrosivaPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Protección Máxima
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Protección Anticorrosiva
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Recubrimientos especializados de alta resistencia para ambientes extremos. 
              Protección superior contra corrosión, oxidación y condiciones adversas.
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
                  <Shield className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Protección Industrial</p>
                  <p className="text-sm text-gray-400">Recubrimiento anticorrosivo</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Protección para Ambientes Extremos
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nuestros recubrimientos anticorrosivos están formulados específicamente para 
                  proporcionar la máxima protección en ambientes agresivos donde las condiciones 
                  estándar no son suficientes.
                </p>
                <p>
                  Utilizamos sistemas de recubrimiento multicapa con primers anticorrosivos, 
                  capas intermedias y acabados de alta resistencia que trabajan en conjunto para 
                  crear una barrera impenetrable contra la corrosión.
                </p>
                <p className="font-semibold text-primary">
                  Ideal para infraestructura costera, plantas químicas, instalaciones industriales 
                  y cualquier aplicación donde la durabilidad extrema es crítica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambientes */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Protección en Ambientes Agresivos
            </h2>
            <p className="text-lg text-gray-600">
              Recubrimientos diseñados para resistir las condiciones más extremas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplet,
                title: 'Ambientes Marinos',
                description: 'Resistencia superior a salinidad, humedad constante y exposición a agua salada.',
                conditions: ['Zonas costeras', 'Plataformas offshore', 'Puertos marítimos', 'Embarcaciones'],
              },
              {
                icon: Sun,
                title: 'Exposición UV Intensa',
                description: 'Protección contra degradación por radiación ultravioleta y altas temperaturas.',
                conditions: ['Exteriores', 'Climas desérticos', 'Alta montaña', 'Zonas tropicales'],
              },
              {
                icon: Zap,
                title: 'Químicos Industriales',
                description: 'Resistencia a ácidos, álcalis, solventes y productos químicos agresivos.',
                conditions: ['Plantas químicas', 'Refinerías', 'Minería', 'Procesamiento'],
              },
              {
                icon: Wind,
                title: 'Contaminación Industrial',
                description: 'Protección contra SO₂, NOx y otros contaminantes industriales corrosivos.',
                conditions: ['Zonas industriales', 'Áreas urbanas', 'Plantas de energía', 'Fundiciones'],
              },
              {
                icon: Droplet,
                title: 'Alta Humedad',
                description: 'Barrera contra condensación constante y ambientes húmedos.',
                conditions: ['Zonas tropicales', 'Cámaras frigoríficas', 'Baños y cocinas', 'Túneles'],
              },
              {
                icon: Mountain,
                title: 'Condiciones Extremas',
                description: 'Resistencia a ciclos térmicos, abrasión mecánica y estrés ambiental.',
                conditions: ['Maquinaria pesada', 'Infraestructura', 'Minería', 'Construcción'],
              },
            ].map((environment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <environment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{environment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{environment.description}</p>
                  <ul className="space-y-1">
                    {environment.conditions.map((condition, i) => (
                      <li key={i} className="text-sm text-gray-500">
                        • {condition}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Protección */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sistema de Protección Multicapa
            </h2>
            <p className="text-lg text-gray-600">
              Protección integral con múltiples barreras de defensa
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                layer: 'Capa 1: Tratamiento Base',
                title: 'Fosfatado Anticorrosivo',
                description: 'Conversión química de la superficie que crea la primera barrera contra corrosión y mejora adherencia.',
                thickness: '1-3 micrones',
                color: 'bg-blue-500',
              },
              {
                layer: 'Capa 2: Primer',
                title: 'Epoxi Anticorrosivo',
                description: 'Recubrimiento epoxi de alta resistencia con inhibidores de corrosión que protege el metal base.',
                thickness: '40-80 micrones',
                color: 'bg-green-500',
              },
              {
                layer: 'Capa 3: Acabado',
                title: 'Poliéster o Poliuretano',
                description: 'Capa final de alta resistencia a intemperie, UV y químicos que proporciona color y protección adicional.',
                thickness: '60-100 micrones',
                color: 'bg-orange-500',
              },
            ].map((layer, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-4 h-full ${layer.color} rounded-full`} />
                  <div className="flex-1">
                    <div className="text-sm text-primary font-semibold mb-1">
                      {layer.layer}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{layer.title}</h3>
                    <p className="text-gray-600 mb-3">{layer.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Espesor: {layer.thickness}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-secondary/10 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Espesor Total del Sistema: 100-180 micrones
            </p>
            <p className="text-gray-600">
              Protección garantizada por 10-20 años en ambientes extremos
            </p>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Aplicaciones Críticas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Torres de transmisión',
              'Estructuras metálicas offshore',
              'Tanques de almacenamiento',
              'Tuberías industriales',
              'Puentes y viaductos',
              'Plataformas petroleras',
              'Maquinaria minera',
              'Equipos marinos',
              'Torres eólicas',
              'Infraestructura portuaria',
              'Plantas químicas',
              'Refinerías',
            ].map((application, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-700">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cumplimiento de Normativas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'ASTM D3359',
              'ISO 12944',
              'SSPC-SP',
              'NACE',
            ].map((standard, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{standard}</p>
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
              Proteja su Inversión con lo Mejor
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Recubrimientos anticorrosivos de máxima durabilidad para ambientes extremos
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

import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Galería de Proyectos',
  description: 'Explora nuestro portafolio de proyectos de pintura electrostática realizados para diversas industrias.',
};

// Datos de ejemplo para la galería
const projectsData = [
  {
    id: 1,
    title: 'Componentes Automotrices',
    industry: 'automotriz',
    description: 'Rines y partes de carrocería con acabado profesional',
    image: null,
  },
  {
    id: 2,
    title: 'Maquinaria Industrial',
    industry: 'maquinaria',
    description: 'Carcasas de equipos pesados con protección anticorrosiva',
    image: null,
  },
  {
    id: 3,
    title: 'Mobiliario de Oficina',
    industry: 'muebles',
    description: 'Escritorios y archiveros metálicos con acabado mate',
    image: null,
  },
  {
    id: 4,
    title: 'Estructuras de Construcción',
    industry: 'construccion',
    description: 'Barandales y ventanería con alta resistencia',
    image: null,
  },
  {
    id: 5,
    title: 'Electrodomésticos',
    industry: 'electrodomesticos',
    description: 'Paneles de refrigeradores con acabado brillante',
    image: null,
  },
  {
    id: 6,
    title: 'Herrería Decorativa',
    industry: 'herreria',
    description: 'Portones residenciales con textura especial',
    image: null,
  },
  {
    id: 7,
    title: 'Equipo Automotriz',
    industry: 'automotriz',
    description: 'Componentes de motor con acabado high-gloss',
    image: null,
  },
  {
    id: 8,
    title: 'Maquinaria Agrícola',
    industry: 'maquinaria',
    description: 'Implementos con recubrimiento extra-resistente',
    image: null,
  },
  {
    id: 9,
    title: 'Muebles Metálicos',
    industry: 'muebles',
    description: 'Estanterías industriales con acabado texturizado',
    image: null,
  },
];

export default function GaleriaPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Portafolio
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Galería de Proyectos
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explora nuestros trabajos realizados para diversas industrias. Cada proyecto 
              refleja nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Galería con Filtros */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="flex-wrap h-auto gap-2">
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  {INDUSTRIES.map((industry) => (
                    <TabsTrigger key={industry.id} value={industry.id}>
                      {industry.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="todos" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              {INDUSTRIES.map((industry) => (
                <TabsContent key={industry.id} value={industry.id} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData
                      .filter((p) => p.industry === industry.id)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: '500+', label: 'Proyectos Completados' },
              { value: '150+', label: 'Clientes Satisfechos' },
              { value: '20+', label: 'Años de Experiencia' },
              { value: '99%', label: 'Tasa de Satisfacción' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ¿Quieres que tu Proyecto sea el Siguiente?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a cientos de clientes satisfechos con nuestros servicios
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

// Componente de tarjeta de proyecto
function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Imagen Placeholder */}
      <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <ImageIcon className="h-16 w-16 text-gray-400" />
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{project.title}</Badge>
        </div>
      </div>

      {/* Contenido */}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {INDUSTRIES.find((i) => i.id === project.industry)?.name || 'General'}
          </span>
          <button className="text-primary hover:text-primary/80 font-medium">
            Ver más →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

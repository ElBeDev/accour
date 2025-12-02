import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Target, Eye, Heart, Award, Users, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce a ACCOUR, empresa líder en pintura electrostática industrial. Nuestra historia, misión, visión y valores que nos distinguen.',
};

export default function NosotrosPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Sobre Nosotros
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ACCOUR - Especialistas en Pintura Electrostática
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Más de 20 años transformando la industria con recubrimientos de la más alta calidad
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen Placeholder */}
            <div className="relative aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Nuestras Instalaciones</p>
                  <p className="text-sm text-gray-400">Imagen de la planta</p>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div>
              <Badge variant="secondary" className="mb-4">Nuestra Historia</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trayectoria de Excelencia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ACCOUR nace de la necesidad del mercado industrial mexicano de contar con 
                  servicios de recubrimiento de alta calidad, durabilidad y con tecnología de punta.
                </p>
                <p>
                  Con más de 20 años de experiencia certificados en ISO-9001:2015, nos hemos consolidado como uno de los 
                  proveedores líderes de pintura electrostática en polvo, atendiendo a cientos 
                  de empresas de diversos sectores industriales.
                </p>
                <p>
                  Nuestra inversión constante en tecnología, capacitación y mejora de procesos 
                  nos permite garantizar resultados superiores en cada proyecto que realizamos.
                </p>
                <p className="font-semibold text-primary">
                  Hoy somos el socio de confianza de empresas líderes en automotriz, manufactura, 
                  construcción y más.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Misión y Visión */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Misión */}
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar servicios de recubrimiento en polvo de la más alta calidad, 
                  superando las expectativas de nuestros clientes mediante tecnología de punta, 
                  procesos certificados y un equipo comprometido con la excelencia. Buscamos 
                  ser el aliado confiable que transforma y protege los productos de la industria 
                  mexicana.
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="border-2 border-secondary/20 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser la empresa líder en servicios de pintura electrostática y recubrimientos 
                  industriales en la región, reconocida por nuestra calidad, innovación y 
                  compromiso ambiental. Expandir nuestros servicios para atender las necesidades 
                  de más industrias y contribuir al desarrollo industrial sustentable del país.
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: 'Calidad',
                description: 'Compromiso inquebrantable con la excelencia en cada proceso y acabado.',
              },
              {
                icon: Heart,
                title: 'Integridad',
                description: 'Honestidad y transparencia en todas nuestras relaciones comerciales.',
              },
              {
                icon: Users,
                title: 'Trabajo en Equipo',
                description: 'Colaboración y respeto mutuo para alcanzar objetivos comunes.',
              },
              {
                icon: Target,
                title: 'Orientación al Cliente',
                description: 'Enfoque total en satisfacer y superar las expectativas de nuestros clientes.',
              },
              {
                icon: Building2,
                title: 'Innovación',
                description: 'Búsqueda constante de mejora y adopción de nuevas tecnologías.',
              },
              {
                icon: Eye,
                title: 'Responsabilidad',
                description: 'Compromiso con el medio ambiente y la comunidad que nos rodea.',
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600">
              Lo que nos hace diferentes en el mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Experiencia Comprobada',
                description: '20+ años atendiendo las necesidades de la industria con resultados excepcionales en más de 5000 proyectos.',

              },
              {
                title: 'Tecnología de Punta',
                description: 'Equipos modernos y procesos certificados que garantizan la máxima calidad en cada aplicación.',
              },
              {
                title: 'Equipo Especializado',
                description: 'Personal altamente capacitado y con años de experiencia en recubrimientos industriales.',
              },
              {
                title: 'Atención Personalizada',
                description: 'Asesoría técnica desde la cotización hasta la entrega final del proyecto.',
              },
              {
                title: 'Compromiso con Calidad',
                description: 'Control de calidad riguroso en cada etapa del proceso para garantizar resultados perfectos.',
              },
              {
                title: 'Cumplimiento Garantizado',
                description: 'Respetamos tiempos de entrega y cumplimos con las especificaciones acordadas.',
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones y Capacidades */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Certificaciones y Homologaciones</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Calidad Certificada y Procesos Estandarizados
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                <p className="text-lg font-semibold text-primary">
                  ✓ Certificados en ISO-9001:2015
                </p>
                <p className="text-lg font-semibold text-primary">
                  ✓ Homologados por CAF México como Proceso Especial
                </p>
                <p>
                  Nuestros procesos cumplen con las normas y estándares internacionales más 
                  exigentes de la industria del recubrimiento en polvo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Procesos certificados ISO-9001:2015</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Homologación CAF México - Proceso Especial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Cumplimiento de especificaciones ASTM para recubrimientos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Inspección ASTM D-3359 (adherencia y espesor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Control de colorimetría y brillo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Personal capacitado y certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span>Equipos calibrados y mantenidos regularmente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Imagen Placeholder */}
            <div className="relative aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Certificaciones</p>
                  <p className="text-sm text-gray-400">Imagen de certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Trabajar con Nosotros?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a las empresas que confían en ACCOUR para sus necesidades de recubrimiento
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

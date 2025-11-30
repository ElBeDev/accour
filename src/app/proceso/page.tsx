import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ArrowRight, 
  CheckCircle2,
  Zap, 
  Flame, 
  Layers, 
  Ruler, 
  Weight, 
  ThermometerSun, 
  Clock,
  Beaker,
  Shield,
  Palette
} from 'lucide-react';
import { 
  PROCESS_STEPS,
  TECHNICAL_SPECS, 
  POWDER_TYPES, 
  FINISH_TYPES, 
  QUALITY_TESTS, 
  SURFACE_PREP 
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Proceso y Especificaciones Técnicas',
  description: 'Conoce nuestro proceso profesional paso a paso y las especificaciones técnicas completas del sistema de pintura electrostática.',
};

export default function ProcesoPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Proceso Técnico
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Proceso y Especificaciones Técnicas
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Conoce cada paso de nuestro proceso profesional y las especificaciones técnicas 
              que garantizan la máxima calidad en cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso Detallado */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
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
                        <Icon className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">Imagen del proceso</p>
                        <p className="text-sm text-gray-400">{step.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {step.order}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          Paso {step.order}
                        </Badge>
                        <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {step.details && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Detalles técnicos:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-gray-600">
                              <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      <Separator />

      {/* Ventajas del Proceso */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ventajas de Nuestro Proceso
            </h2>
            <p className="text-lg text-gray-600">
              Garantizamos resultados superiores en cada etapa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Alta Eficiencia',
                description: 'Aprovechamiento del 95% del polvo aplicado, sin desperdicio.',
              },
              {
                title: 'Cobertura Uniforme',
                description: 'La carga electrostática garantiza acabado parejo en toda la pieza.',
              },
              {
                title: 'Adherencia Superior',
                description: 'Preparación profesional para máxima adherencia del recubrimiento.',
              },
              {
                title: 'Durabilidad Extrema',
                description: 'Resistencia a rayones, químicos, corrosión y condiciones extremas.',
              },
              {
                title: 'Acabado Profesional',
                description: 'Superficie lisa, uniforme y estéticamente superior.',
              },
              {
                title: 'Proceso Ecológico',
                description: 'Sin emisiones VOC, sin solventes, 100% amigable con el medio ambiente.',
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Especificaciones Técnicas */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Información Técnica</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Especificaciones Técnicas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detalles técnicos completos de nuestro sistema de pintura electrostática, 
                capacidades de producción y estándares de calidad
              </p>
            </div>

            <Tabs defaultValue="parametros" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
                <TabsTrigger value="parametros">Parámetros</TabsTrigger>
                <TabsTrigger value="polvos">Tipos de Polvo</TabsTrigger>
                <TabsTrigger value="acabados">Acabados</TabsTrigger>
                <TabsTrigger value="preparacion">Preparación</TabsTrigger>
                <TabsTrigger value="calidad">Calidad</TabsTrigger>
              </TabsList>

              {/* Parámetros del Proceso */}
              <TabsContent value="parametros" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Zap className="mb-2 size-8 text-primary" />
                      <CardTitle>Voltaje de Aplicación</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-primary">{TECHNICAL_SPECS.voltage}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Rango de voltaje para carga electrostática del polvo
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Flame className="mb-2 size-8 text-orange-500" />
                      <CardTitle>Temperatura de Curado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-orange-500">{TECHNICAL_SPECS.curingTemp}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Horno industrial con control preciso de temperatura
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Clock className="mb-2 size-8 text-blue-500" />
                      <CardTitle>Tiempo de Curado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-blue-500">{TECHNICAL_SPECS.curingTime}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Según especificación del polvo utilizado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Layers className="mb-2 size-8 text-green-500" />
                      <CardTitle>Espesor de Película</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-green-500">{TECHNICAL_SPECS.filmThickness}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Espesor óptimo para protección y acabado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CheckCircle2 className="mb-2 size-8 text-emerald-500" />
                      <CardTitle>Eficiencia de Transferencia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-purple-500">{TECHNICAL_SPECS.transferEfficiency}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Mínimo desperdicio, máxima eficiencia
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <ThermometerSun className="mb-2 size-8 text-red-500" />
                      <CardTitle>Rango de Servicio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl sm:text-3xl font-bold text-red-500">{TECHNICAL_SPECS.serviceTemp}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Resistencia térmica del recubrimiento
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Capacidades */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ruler className="size-6 text-primary" />
                      Capacidades de Producción
                    </CardTitle>
                    <CardDescription>Dimensiones máximas y capacidad de carga</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3 mb-6">
                      <div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">Largo</p>
                        <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.length}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">Ancho</p>
                        <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.width}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">Alto</p>
                        <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.height}</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <Weight className="size-6 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Peso Máximo por Pieza</p>
                          <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxWeight}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Vida Útil Esperada</p>
                        <p className="text-xl font-bold">{TECHNICAL_SPECS.lifeExpectancy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tipos de Polvo */}
              <TabsContent value="polvos">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {POWDER_TYPES.map((powder, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <Beaker className="mb-2 size-8 text-primary" />
                        <CardTitle>{powder.name}</CardTitle>
                        <Badge variant="outline">{powder.use}</Badge>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {powder.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Acabados */}
              <TabsContent value="acabados">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="size-6 text-primary" />
                      Tipos de Acabado Disponibles
                    </CardTitle>
                    <CardDescription>
                      Gama completa de colores RAL y colores personalizados disponibles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {FINISH_TYPES.map((finish, index) => (
                        <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                          {finish}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preparación de Superficie */}
              <TabsContent value="preparacion">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {SURFACE_PREP.map((prep, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <Shield className="mb-2 size-8 text-primary" />
                        <CardTitle className="text-lg">{prep.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{prep.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Pruebas de Calidad */}
              <TabsContent value="calidad">
                <Card>
                  <CardHeader>
                    <CardTitle>Pruebas de Control de Calidad</CardTitle>
                    <CardDescription>
                      Verificación rigurosa en cada proyecto según estándares industriales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {QUALITY_TESTS.map((test, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 size-5 shrink-0 text-green-500" />
                          <span className="text-sm">{test}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ del Proceso */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Todo lo que necesitas saber sobre nuestro proceso
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  ¿Cuánto tiempo tarda el proceso completo?
                </AccordionTrigger>
                <AccordionContent>
                  El tiempo depende del tamaño y cantidad de piezas. En promedio, el proceso 
                  completo (desde preparación hasta entrega) toma entre 3-7 días hábiles. 
                  Proyectos urgentes pueden ser priorizados con costo adicional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  ¿Qué tipo de materiales pueden ser pintados electrostáticamente?
                </AccordionTrigger>
                <AccordionContent>
                  La pintura electrostática es ideal para metales como acero, aluminio, hierro, 
                  acero inoxidable, zinc y sus aleaciones. No es aplicable para plásticos o 
                  madera (excepto que tengan tratamiento conductivo especial).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  ¿Qué garantía tienen los trabajos?
                </AccordionTrigger>
                <AccordionContent>
                  Ofrecemos garantía de calidad en el proceso y aplicación. La durabilidad del 
                  acabado depende del uso y mantenimiento. En condiciones normales, el 
                  recubrimiento puede durar más de 20 años sin deterioro significativo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  ¿Puedo elegir cualquier color?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, trabajamos con la paleta RAL completa (más de 200 colores) y también 
                  podemos formular colores personalizados bajo pedido. También ofrecemos 
                  acabados especiales como texturizados, metálicos y mate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  ¿Qué espesores de recubrimiento manejan?
                </AccordionTrigger>
                <AccordionContent>
                  El espesor estándar es de 60-100 micras, ideal para la mayoría de aplicaciones. 
                  Para aplicaciones industriales pesadas o ambientes agresivos, podemos aplicar 
                  capas de hasta 150-200 micras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  ¿Realizan reprocesos si hay defectos?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, si se detecta algún defecto de aplicación o preparación, realizamos el 
                  reproceso sin costo adicional. Nuestro control de calidad minimiza estos casos, 
                  pero estamos comprometidos con la satisfacción total del cliente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos para una cotización gratuita y sin compromiso
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

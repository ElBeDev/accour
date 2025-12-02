import { Metadata } from 'next';
import { 
  Zap, 
  Flame, 
  Layers, 
  Ruler, 
  Weight, 
  ThermometerSun, 
  Clock, 
  CheckCircle2,
  Beaker,
  Shield,
  Palette,
  Box,
  Gauge,
  Factory
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  TECHNICAL_SPECS, 
  POWDER_TYPES, 
  FINISH_TYPES, 
  QUALITY_TESTS, 
  SURFACE_PREP 
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Especificaciones Técnicas',
  description: 'Detalles técnicos completos del proceso de pintura electrostática: voltaje, temperatura, tipos de polvo, acabados y capacidades.',
};

export default function EspecificacionesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Información Técnica</Badge>
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold md:text-5xl">
              Especificaciones Técnicas
            </h1>
            <p className="text-lg text-muted-foreground">
              Conoce los detalles técnicos de nuestro proceso de pintura electrostática, 
              capacidades de producción y estándares de calidad
            </p>
          </div>
        </div>
      </section>

      {/* Parámetros del Proceso */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Parámetros del Proceso</h2>
            <p className="text-muted-foreground">
              Especificaciones técnicas de nuestro sistema de aplicación electrostática
            </p>
          </div>

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
        </div>
      </section>

      {/* Equipos de Aplicación */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="bg-blue-600 hover:bg-blue-700 mb-4">
              Tecnología de Aplicación
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">Sistema de Aplicación Electrostática</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              8 equipos semiautomáticos de última generación y 4 cabinas especializadas para aplicación uniforme y eficiente
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-4 mb-8">
              <Card className="bg-white border-blue-200">
                <CardHeader className="text-center pb-3">
                  <Zap className="mx-auto mb-2 size-12 text-blue-600" />
                  <CardTitle className="text-4xl font-bold text-blue-600">8</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Equipos</p>
                  <p className="text-sm text-muted-foreground mt-1">Semiautomáticos</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200">
                <CardHeader className="text-center pb-3">
                  <Box className="mx-auto mb-2 size-12 text-blue-600" />
                  <CardTitle className="text-4xl font-bold text-blue-600">3</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Cabinas Abiertas</p>
                  <p className="text-sm text-muted-foreground mt-1">Pintura estándar</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200">
                <CardHeader className="text-center pb-3">
                  <Shield className="mx-auto mb-2 size-12 text-blue-600" />
                  <CardTitle className="text-4xl font-bold text-blue-600">1</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Cuarto Limpio</p>
                  <p className="text-sm text-muted-foreground mt-1">Acabados premium</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200">
                <CardHeader className="text-center pb-3">
                  <CheckCircle2 className="mx-auto mb-2 size-12 text-blue-600" />
                  <CardTitle className="text-3xl font-bold text-blue-600">95-98%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Eficiencia</p>
                  <p className="text-sm text-muted-foreground mt-1">Transferencia</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-linear-to-br from-white to-blue-50 border-2 border-blue-200 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="size-6 text-blue-600" />
                  Equipos de Aplicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-blue-600" />
                      Tecnología de Punta
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• <span className="font-semibold text-gray-900">8 equipos semiautomáticos</span> profesionales</li>
                      <li>• Pistolas electrostáticas de alta precisión</li>
                      <li>• Control digital de voltaje (30-100 kV)</li>
                      <li>• Sistema de recuperación de polvo</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-blue-600" />
                      Resultados Garantizados
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• Aplicación uniforme y consistente</li>
                      <li>• Eficiencia de transferencia 95-98%</li>
                      <li>• Mínimo desperdicio de material</li>
                      <li>• Acabado profesional certificado</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-white to-blue-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Box className="size-6 text-blue-600" />
                  Cabinas de Pintura Especializadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Box className="size-5 text-blue-600" />
                      3 Cabinas Abiertas
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• Diseño abierto para piezas de gran tamaño</li>
                      <li>• Sistema de extracción y filtración</li>
                      <li>• Iluminación industrial uniforme</li>
                      <li>• Recuperación eficiente de polvo</li>
                      <li>• Ideal para producción estándar</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="size-5 text-blue-600" />
                      1 Cabina Cuarto Limpio
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• Ambiente controlado libre de contaminantes</li>
                      <li>• Filtración HEPA de alta eficiencia</li>
                      <li>• Control de temperatura y humedad</li>
                      <li>• Acabados premium sin imperfecciones</li>
                      <li>• Ideal para proyectos de alta calidad</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hornos de Curado */}
      <section className="py-20 bg-linear-to-br from-orange-50 to-red-50">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="bg-orange-600 hover:bg-orange-700 mb-4">
              Infraestructura Industrial
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">Sistema de Hornos de Curado</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contamos con 3 hornos industriales de gran capacidad para procesar grandes volúmenes con eficiencia
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card className="bg-white border-orange-200">
                <CardHeader className="text-center pb-3">
                  <Flame className="mx-auto mb-2 size-12 text-orange-500" />
                  <CardTitle className="text-4xl font-bold text-orange-600">3</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Hornos Industriales</p>
                  <p className="text-sm text-muted-foreground mt-1">Alta capacidad</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardHeader className="text-center pb-3">
                  <Box className="mx-auto mb-2 size-12 text-orange-500" />
                  <CardTitle className="text-2xl font-bold text-orange-600">5.8 × 3.0 × 2.0</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Dimensiones (metros)</p>
                  <p className="text-sm text-muted-foreground mt-1">Largo × Ancho × Alto</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardHeader className="text-center pb-3">
                  <Gauge className="mx-auto mb-2 size-12 text-orange-500" />
                  <CardTitle className="text-3xl font-bold text-orange-600">34.8 m³</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Capacidad Total</p>
                  <p className="text-sm text-muted-foreground mt-1">Por horno</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-linear-to-br from-white to-orange-50 border-2 border-orange-200 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="size-6 text-orange-600" />
                  Especificaciones de los Hornos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-orange-500" />
                      Dimensiones Internas
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• Largo: <span className="font-semibold text-gray-900">5.8 metros</span></li>
                      <li>• Ancho: <span className="font-semibold text-gray-900">3.0 metros</span></li>
                      <li>• Alto: <span className="font-semibold text-gray-900">2.0 metros</span></li>
                      <li>• Volumen útil: <span className="font-semibold text-gray-900">34.8 m³ por horno</span></li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-orange-500" />
                      Capacidades y Ventajas
                    </h4>
                    <ul className="ml-7 space-y-2 text-sm text-muted-foreground">
                      <li>• Procesamiento de piezas grandes y volúmenes altos</li>
                      <li>• Control preciso de temperatura (160-220°C)</li>
                      <li>• Distribución uniforme de calor</li>
                      <li>• Tiempos de curado optimizados (10-20 min)</li>
                      <li>• Sistema de convección forzada</li>
                      <li>• Mayor productividad y eficiencia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monitoreo Constante */}
            <Card className="bg-linear-to-r from-orange-500 to-red-500 border-0 text-white">
              <CardContent className="py-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="shrink-0">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                      <Gauge className="size-16 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Monitoreo Constante de Hornos</h3>
                    <p className="text-lg text-orange-50 leading-relaxed">
                      Constantemente monitoreamos nuestros hornos para garantizar un <span className="font-semibold text-white">curado correcto de las piezas recubiertas</span>. 
                      Control en tiempo real de temperatura, tiempo de curado y calidad del proceso para asegurar acabados perfectos en cada ciclo.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <CheckCircle2 className="size-16 text-white/80" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="bg-primary hover:bg-primary/90 mb-4">
              Capacidad Instalada
            </Badge>
            <h2 className="mb-4 text-3xl font-bold">Capacidades de Producción</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capacidad de aplicación semanal de 5000 m² con disponibilidad inmediata del 38%
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {/* Capacidad Semanal */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center pb-3">
                  <Factory className="mx-auto mb-2 size-12 text-primary" />
                  <CardTitle className="text-4xl font-bold text-primary">5000 m²</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Capacidad Semanal</p>
                  <p className="text-sm text-muted-foreground mt-1">Aplicación de recubrimiento</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader className="text-center pb-3">
                  <CheckCircle2 className="mx-auto mb-2 size-12 text-green-600" />
                  <CardTitle className="text-4xl font-bold text-green-600">38%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900">Disponibilidad</p>
                  <p className="text-sm text-muted-foreground mt-1">Capacidad inmediata</p>
                </CardContent>
              </Card>
            </div>

            {/* Dimensiones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="size-6 text-primary" />
                  Rango de Tamaños de Piezas
                </CardTitle>
                <CardDescription>
                  Desde pequeñas piezas hasta estructuras de gran tamaño
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Tamaño Mínimo</p>
                    <p className="text-3xl font-bold text-primary">1 cm²</p>
                    <p className="text-sm text-muted-foreground mt-2">Piezas pequeñas y componentes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Volumen Máximo</p>
                    <p className="text-3xl font-bold text-primary">5.2 m³</p>
                    <p className="text-sm text-muted-foreground mt-2">Piezas de gran tamaño</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Largo Máximo</p>
                    <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.length}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Ancho Máximo</p>
                    <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.width}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Alto Máximo</p>
                    <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.height}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Volumen Máximo</p>
                    <p className="text-2xl font-bold">{TECHNICAL_SPECS.maxDimensions.volume}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Weight className="size-6 text-primary" />
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
          </div>
        </div>
      </section>

      {/* Tipos de Polvo */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Tipos de Polvo Disponibles</h2>
            <p className="text-muted-foreground">
              Selección según la aplicación y requisitos del proyecto
            </p>
          </div>

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
        </div>
      </section>

      {/* Acabados */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Acabados Disponibles</h2>
            <p className="text-muted-foreground">
              Variedad de texturas y brillos para cada aplicación
            </p>
          </div>

          <Card className="mx-auto max-w-4xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-6 text-primary" />
                Tipos de Acabado
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
        </div>
      </section>

      {/* Preparación de Superficie */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Preparación de Superficie</h2>
            <p className="text-muted-foreground">
              Tratamientos previos para garantizar adherencia y durabilidad
            </p>
          </div>

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
        </div>
      </section>

      {/* Pruebas de Calidad */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pruebas de Control de Calidad</h2>
            <p className="text-muted-foreground">
              Verificación rigurosa en cada proyecto
            </p>
          </div>

          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Estándares de Calidad</CardTitle>
              <CardDescription>
                Cumplimiento de normas industriales y verificación en cada etapa
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-linear-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">¿Necesitas más información técnica?</h2>
              <p className="mb-8 text-lg opacity-90">
                Contáctanos para recibir asesoría especializada sobre tu proyecto
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="/proceso"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 font-semibold transition-colors hover:bg-white/10"
                >
                  Ver Proceso Completo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden pt-16 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[32px_32px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2 rounded-full text-sm font-medium">
                Especialistas en Pintura Electrostática
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Acabados Industriales de{' '}
              <span className="text-secondary">Alta Calidad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed"
            >
              Protección y estética superior para tus productos. Tecnología de punta en recubrimiento electrostático con acabado de polvo poliéster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
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
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="flex items-start space-x-3 group">
                <div className="relative">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-secondary shrink-0 mt-1" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.22_25)] opacity-60" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Máxima Durabilidad</h3>
                  <p className="text-xs sm:text-sm text-white/80">Resistencia superior a corrosión</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="relative">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary shrink-0 mt-1" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.22_25)] opacity-60" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Entrega Rápida</h3>
                  <p className="text-xs sm:text-sm text-white/80">Tiempos de proceso optimizados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="relative">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary shrink-0 mt-1" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.22_25)] opacity-60" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Calidad Garantizada</h3>
                  <p className="text-xs sm:text-sm text-white/80">Certificación de procesos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent rounded-2xl" />
              <div className="relative h-full flex items-center justify-center">
                {/* Placeholder for image - replace with actual image */}
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/10 mb-4">ACCOUR</div>
                  <p className="text-white/80">Excelencia en Recubrimiento</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs sm:text-sm mb-2">Desliza para más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

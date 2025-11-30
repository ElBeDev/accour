'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold text-sm uppercase tracking-wider"
          >
            Nuestro Proceso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6"
          >
            Proceso Técnico de Excelencia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Cada paso garantiza la máxima calidad y durabilidad en el acabado final
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-2">
                    <CardContent className="p-6">
                      {/* Step Number */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 mx-auto bg-linear-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
                          {step.order}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {step.description}
                      </p>

                      {/* Details */}
                      {step.details && (
                        <ul className="mt-4 space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-xs text-gray-500">
                              <span className="text-secondary mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-primary/5 border-l-4 border-primary rounded-lg p-6"
        >
          <h4 className="font-bold text-lg text-gray-900 mb-2">
            Garantía de Calidad
          </h4>
          <p className="text-gray-700">
            Cada etapa de nuestro proceso está diseñada para garantizar la máxima adherencia, 
            durabilidad y acabado estético. Utilizamos tecnología de punta y seguimos estrictos 
            controles de calidad en cada fase.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { BENEFITS } from '@/lib/constants';

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold text-sm uppercase tracking-wider"
          >
            Ventajas Competitivas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 sm:mb-6"
          >
            ¿Por Qué Elegir Pintura Electrostática?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Beneficios comprobados que hacen la diferencia en tus proyectos industriales
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl transform group-hover:scale-105 transition-transform duration-300\" />
                <div className="relative p-8">
                  <div className="w-14 h-14 bg-linear-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                    <Icon className="h-7 w-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[oklch(0.55_0.22_25)] opacity-0 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-20"
        >
        </motion.div>
      </div>
    </section>
  );
}

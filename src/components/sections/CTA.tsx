'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_INFO } from '@/lib/constants';

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-linear-to-br from-primary via-primary/95 to-primary/90 text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                    >
                      ¿Listo para Transformar tus Productos?
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed"
                    >
                      Obtén una cotización personalizada y descubre cómo la pintura electrostática puede mejorar la calidad y durabilidad de tus productos.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
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
                        className="bg-primary/10 border-primary/20 text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                      >
                        <Link href="/servicios">Ver Servicios</Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Contact Options */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 group hover:border-white/40 transition-colors">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-secondary rounded-lg p-2 sm:p-3 relative">
                          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[oklch(0.55_0.22_25)] opacity-0 group-hover:opacity-80 transition-opacity" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Escríbenos</h3>
                          <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="text-white/90 hover:text-white break-all text-xs sm:text-base"
                          >
                            {CONTACT_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {CONTACT_INFO.whatsapp && (
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 group hover:border-white/40 transition-colors">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="bg-secondary rounded-lg p-2 sm:p-3 relative">
                            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[oklch(0.55_0.22_25)] opacity-0 group-hover:opacity-80 transition-opacity" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">WhatsApp</h3>
                            <a
                              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/90 hover:text-white text-xs sm:text-base"
                            >
                              Chat directo
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

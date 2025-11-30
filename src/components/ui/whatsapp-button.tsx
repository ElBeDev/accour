'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!CONTACT_INFO.whatsapp) return null;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de pintura electrostática.')}`;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
          {showTooltip && (
            <div className="bg-white shadow-lg rounded-lg p-3 sm:p-4 max-w-[280px] sm:max-w-xs animate-in slide-in-from-right">
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  ¿Necesitas ayuda?
                </p>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600">
                Chatea con nosotros por WhatsApp
              </p>
            </div>
          )}
          
          <Button
            asChild
            size="lg"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </Button>
        </div>
      )}
    </>
  );
}

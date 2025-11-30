import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-sm mb-4">{SITE_CONFIG.description}</p>
            <div className="flex space-x-4">
              {/* Social links could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-white break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.whatsapp && (
                <li className="flex items-start">
                  <MessageCircle className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horario de Atención</h4>
            <ul className="space-y-2 text-sm">
              <li>Lunes - Viernes</li>
              <li className="text-white font-medium">8:00 AM - 6:00 PM</li>
              <li className="mt-3">Sábados</li>
              <li className="text-white font-medium">9:00 AM - 2:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página No Encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir al Inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/servicios">
              <Search className="mr-2 h-5 w-5" />
              Ver Servicios
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Enlaces útiles:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contacto" className="text-sm text-primary hover:underline">
              Contacto
            </Link>
            <Link href="/proceso" className="text-sm text-primary hover:underline">
              Proceso
            </Link>
            <Link href="/industrias" className="text-sm text-primary hover:underline">
              Industrias
            </Link>
            <Link href="/galeria" className="text-sm text-primary hover:underline">
              Galería
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

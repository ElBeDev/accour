import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Industries from '@/components/sections/Industries';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Industries />
      <CTA />
    </main>
  );
}

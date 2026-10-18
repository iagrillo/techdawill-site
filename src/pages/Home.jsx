import Hero from '@/components/site/home/Hero';
import ServicePillars from '@/components/site/home/ServicePillars';
import Approach from '@/components/site/home/Approach';
import GlobalReach from '@/components/site/home/GlobalReach';
import AcademyStrip from '@/components/site/home/AcademyStrip';
import CtaBand from '@/components/site/home/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <Approach />
      <GlobalReach />
      <AcademyStrip />
      <CtaBand />
    </>
  );
}
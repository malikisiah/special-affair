import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <div className='min-h-screen'>
        <Hero />
      </div>
      <div className='min-h-screen'>
        <Features />
      </div>
      <div className='min-h-screen'>
        <Testimonials />
      </div>
    </div>
  );
}

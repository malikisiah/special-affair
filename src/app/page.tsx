import Image from "next/image";
import Hero from "@/components/hero";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
    </div>
  );
}

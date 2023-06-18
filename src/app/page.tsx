import Image from "next/image";
import Hero from "./hero";
import MyModal from "@/components/Modal";

export default function Home() {
  return (
    <div>
      <Hero />
      <MyModal />
    </div>
  );
}

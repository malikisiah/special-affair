import Carousel from "@/components/carousel";
import Gallery from "@/components/gallery";

export default function Routines() {
  return (
    <>
      <Gallery />
      <div className='flex justify-center items-center align-middle mt-12'>
        <div className='w-2/3 h-2/3'>
          <Carousel />
        </div>
      </div>
    </>
  );
}

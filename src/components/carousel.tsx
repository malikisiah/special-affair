import Image from "next/image";

export default function Carousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="/aliaksei-ramanouski-YipPfXLCiUo-unsplash.jpg"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="/roman-laschov-gfX1D2_5j2g-unsplash.jpg"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="/jeffery-erhunse-0XWHaJ73wts-unsplash.jpg"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://w.wallhaven.cc/full/9m/wallhaven-9mjoy1.png"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

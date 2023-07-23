"use client";
import Header from "../../components/galleryHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const team = [
    {
      avatar: "/alexander-jawfox-0mqcCmuWNlc-unsplash.jpg",
    },
    {
      avatar: "/ayo-ogunseinde-RrD8ypt8cjY-unsplash.jpg",
    },
    {
      avatar: "/brian-lawson-PN6LflfvoVk-unsplash.jpg",
    },
    {
      avatar: "/jackson-david-ikRDzgaNhIo-unsplash.jpg",
    },
    {
      avatar: "/leon-liu-DhKhYwK5CFY-unsplash.jpg",
    },
    {
      avatar: "/pooja-chaudhary-bqnbKxiIGZI-unsplash.jpg",
    },
    {
      avatar: "/jeffery-erhunse-0XWHaJ73wts-unsplash.jpg",
    },
    {
      avatar: "/roman-laschov-gfX1D2_5j2g-unsplash.jpg",
    },
    {
      avatar: "/bruce-mars-pFyKRmDiWEA-unsplash.jpg",
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <Header />
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: idx * 0.15 },
                    }}
                  >
                    <div className="w-full h-full">
                      <Image
                        width={500}
                        height={500}
                        quality={100}
                        priority={true}
                        src={item.avatar}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl hover:btn-ghost transition hover:scale-110"
                        alt=""
                      />
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
    </>
  );
}

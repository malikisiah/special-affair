"use client";
import Image from "next/image";
import { useState } from "react";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const ds = Dancing_Script({ subsets: ["latin"], weight: "400" });
export default function Hero() {
  const features = [
    {
      name: "Verified",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Convenient Location",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Affordable Price",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section className=''>
      <div className='max-w-screen-xl mx-auto px-4 py-28 gap-12 text-content md:px-8 xl:flex'>
        <div className='space-y-5 max-w-2xl mx-auto text-center xl:text-left'>
          <div className='flex flex-wrap items-center justify-center gap-6 xl:justify-start'>
            {features.map((item, idx) => (
              <div
                key={idx}
                className='flex items-center gap-x-2 text-neutral text-sm'
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <div className={ds.className}>
            <h1 className=' text-7xl pb-1 text-content font-extrabold mx-auto md:text-8xl'>
              A Special Affair
            </h1>
          </div>
          <div className='space-y-1'>
            <p className='max-w-xl mx-auto xl:mx-0 text-neutral'>
              {" "}
              Women&apos;s Dance Studio
            </p>
            <p className='max-w-xl mx-auto xl:mx-0 text-neutral'>
              1415 N Dayton St 3rd floor, Chicago, IL 60642
            </p>
            <p className='max-w-xl mx-auto xl:mx-0 text-neutral'>
              Bianca Teague +1 (773) 886-5543
            </p>
          </div>
          <p className='max-w-xl mx-auto xl:mx-0 text-xl font-semibold text-neutral text-center pt-5'>
            Embrace Your Rhythm, Unleash Your Grace
          </p>
          <div className='items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start'>
            <Link
              href='/'
              className='flex items-center justify-center gap-x-2 py-2 px-4 text-primary font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex'
            >
              Open Classes
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
            <Link
              href='/prices'
              className='flex items-center justify-center gap-x-2 py-2 px-4 text-primary font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex'
            >
              Get access
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex-1 max-w-xl mx-auto mt-14 xl:mt-0'>
          <div className='relative'>
            <Image
              src='https://w.wallhaven.cc/full/ym/wallhaven-yml1zl.jpg'
              className='rounded-lg'
              alt=''
              width={800}
              height={800}
              quality={100}
              priority={true}
            />
            <button
              className='absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-secondary hover:bg-blue-600 ring-offset-2 focus:ring text-white'
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6 m-auto'
              >
                <path d='M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className='fixed inset-0 w-full h-full flex items-center justify-center'>
          <div
            className='absolute inset-0 w-full h-full bg-black/50'
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className='px-4 relative'>
            <button
              className='w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white'
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5 m-auto'
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
              </svg>
            </button>
            <video
              className='rounded-lg w-full max-w-2xl'
              controls
              autoPlay={true}
            >
              <source
                src='https://res.cloudinary.com/floatui/video/upload/v1669411003/Binary_Search_Algorithm_in_100_Seconds_hyg6n5.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

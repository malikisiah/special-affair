import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='min-h-screen'>
        <Hero />
      </div>
      <div className='min-h-screen'>
        <Features />
      </div>
      <div className=''>
        <Testimonials />
      </div>

      <div className='items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-center py-24'>
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
          href='/'
          className='flex items-center justify-center gap-x-2 py-2 px-4 text-primary font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex'
        >
          See Routines
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
  );
}

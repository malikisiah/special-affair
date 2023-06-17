import Image from "next/image";
export default function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1601978043649-a1465994938a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
      }}
    >
      <div className='hero-overlay bg-neutral bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>A Special Affair</h1>

          {/* <button className='btn btn-primary'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

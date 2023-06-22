import Image from "next/image";

export default function Profile() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold pb-4'>Introducing Bianca</h1>
          <div className='card bg-base-200'>
            <div className='card-body text-black'>
              <p className='py-0'>
                Welcome to A Special Affair, where the magic of dance and the
                strength of women combine to create an enchanting space for
                self-expression.
              </p>
              <div className='space-y-5'>
                <p>
                  Meet Bianca, the heart and soul behind A Special Affair. With
                  a captivating aura and boundless energy, she is the driving
                  force that has breathed life into this women&apos;s dance
                  studio.
                </p>
                <p>
                  Born to an inspiring blend of cultures, Bianca is a proud
                  Afro-Latina, embracing the richness of her Black and Puerto
                  Rican heritage. This heritage is woven into the very fabric of
                  A Special Affair. The studio, like Bianca herself, is a
                  tapestry of diversity and vibrancy, often echoing with the
                  passionate rhythms of bachata, a dance and music style that
                  holds a special place in Bianca&apos;s heart.
                </p>
                <p>
                  At the age of 29, Bianca already possesses a wealth of
                  knowledge and experience. Holding a Master&apos;s Degree in
                  Business Administration, she skillfully merges her business
                  acumen with her ardor for dance. She is a firm believer in the
                  power of self-love and women&apos;s empowerment, and her
                  mission is to create a sanctuary where women can explore and
                  celebrate their individuality through dance.
                </p>
                <p>
                  Bianca&apos;s vision for A Special Affair is an inclusive and
                  encouraging space, where women of all backgrounds and ages can
                  come together to support and uplift one another. Through the
                  art of dance, she aims to foster a community of strong,
                  empowered individuals who are unafraid to express themselves
                  and pursue their dreams.
                </p>
                <p>
                  Embark on a journey of self-discovery and empowerment with
                  Bianca and the wonderful community at A Special Affair.
                </p>
                <p className='italic'>
                  &quot;Dance is the hidden language of the soul, and I invite
                  you to speak it with us.&quot; - Bianca
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mask mask-heart'>
          <Image
            src='/meagan_good_-_publicity_-_h_2017.jpg'
            width={800}
            height={800}
            alt=''
            quality={100}
            className='h-full w-full'
          />
        </div>
      </div>
    </div>
  );
}

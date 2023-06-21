export default function Prices() {
  const plans = [
    {
      name: "Daily",
      desc: "Dive into a day of dance euphoria with our Day Pass. Perfect for first-timers or those looking for a spontaneous dance experience.",
      price: 30,
      isMostPop: false,
      cycle: "day",
      features: [
        "Access to all classes on the day of purchase",
        "Complimentary refreshments",
        "Rental dance shoes available",
      ],
    },
    {
      name: "Monthly",
      desc: "Immerse yourself in a month of grace and elegance with our Monthly Pass. A great choice for dance enthusiasts keen on consistent practice and diverse dance styles",
      price: 120,
      isMostPop: true,
      cycle: "month",
      features: [
        "Unlimited access to all classes for 30 days",
        "10% discount on special workshops and events",
        "Priority booking for select classes",
        "1 complimentary guest pass",
      ],
    },
    {
      name: "Yearly",
      desc: "Embrace your rhythm all year long with our Yearly Pass. The ultimate option for dedicated dancers, offering a plethora of perks and exclusive privileges",
      price: 1200,
      isMostPop: false,
      cycle: "year",
      features: [
        "Unlimited access to all classes for 365 days",
        "20% discount on special workshops and events",
        "Priority booking for all classes and events",
        "5 complimentary guest passes",
        "Exclusive access to the Elegance Lounge",
        "Personalized fitness & dance progress consultation",
      ],
    },
  ];

  return (
    <section className='py-14'>
      <div className='max-w-screen-xl mx-auto px-4 text-primary-content md:px-8'>
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-neutral-focus text-3xl font-semibold sm:text-4xl'>
            Flexible Pricing Fit for Any Queen
          </h3>
          <div className='mt-3 max-w-xl'>
            <p>
              You can purchase a daily pass or opt in for monthly/yearly
              subscriptions for unlimited access
            </p>
          </div>
        </div>
        <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 border-secondary mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className='w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold'>
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className='p-8   min-h-full'>
                <span className='text-content font-medium'>{item.name}</span>
                <div className='text-gray-800 text-3xl font-semibold'>
                  ${item.price}{" "}
                  <span className='text-xl text-gray-600 font-normal'>
                    /{item.cycle}
                  </span>
                </div>
                <p className='md:min-h-full '>{item.desc}</p>
                <button className='px-3 py-3 active:bg-secondary-focus rounded-lg w-full font-semibold text-sm  md:-translate-y-20 text-white bg-neutral hover:bg-secondary'>
                  Purchase
                </button>
              </div>
              {/* <ul className='p-8 space-y-3'>
                <li className='pb-2 text-gray-800 font-medium'>
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className='flex items-center gap-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-indigo-600'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

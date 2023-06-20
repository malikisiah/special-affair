import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

Image;
export default function Avatar({ imageSrc, userName }: any) {
  const router = useRouter();
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='avatar'>
          <div className='w-16 rounded-full'>
            <Image src={imageSrc} alt='' width={200} height={200} />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <p className='pb-4 pl-3'>Welcome, {userName}</p>
        <li>
          <a>
            <SignOutButton>
              <button
                className=''
                onClick={() => {
                  router.refresh;
                }}
              >
                {" "}
                Sign Out
              </button>
            </SignOutButton>
          </a>
        </li>
      </ul>
    </div>
  );
}

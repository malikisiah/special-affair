import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='flex items-center justify-center py-10'>
      <SignUp />
    </div>
  );
}

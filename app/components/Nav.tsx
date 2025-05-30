'use client';

import { signOut, useSession } from '@/app/auth-client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Nav() {
  const { data } = useSession();

  return (
    <nav className='flex gap-2'>
      {data ? (
        <>
          <Link href='/create-post'>Create</Link>
          <Button
            className='cursor-pointer'
            onClick={() => signOut()}>
            Signout
          </Button>
        </>
      ) : (
        <>
        <Link className='cursor-pointer' href='/signin'>Signin</Link>
        </>
      )}
    </nav>
  );
}

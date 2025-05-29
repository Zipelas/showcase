'use client';

import { signIn } from '@/app/auth-client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function GithubButton() {
  return (
    <Button
      className='bg-[#8D6E63] text-[#FAF7F7] p-3 rounded text-lg flex items-center gap-2'
      onClick={() => signIn.social({ provider: 'github' })}>
      <Image
        src='/images/github.png'
        alt='Github-ikon'
        width={16}
        height={16}
      />
      Signin with Github
    </Button>
  );
}

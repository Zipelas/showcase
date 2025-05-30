'use client';

import { signIn } from '@/app/auth-client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function GithubButton() {
  return (
    <Button
      className='bg-[#8D6E63] font-bold text-[#FAF7F7] p-12 rounded text-lg flex items-center gap-2 cursor-pointer'
      onClick={() => signIn.social({ provider: 'github' })}>
      <Image
        src='/icons/github.png'
        alt='Github-ikon'
        width={32}
        height={32}
      />
      Signin with Github
    </Button>
  );
}

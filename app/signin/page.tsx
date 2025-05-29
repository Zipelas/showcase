import GithubButton from './providers/github-button';

export default function SigninPage() {
  return (
    <main className='grid place-content-center gap-4 my-20  bg-[#FAF7F7] text-[#8D6E63]'>
      <h1 className='text-4xl text-center'>Login</h1>
      <GithubButton />
    </main>
  );
}

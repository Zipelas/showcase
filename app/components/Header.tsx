import Nav from './Nav';

export default function Header() {
  return (
    <header className='flex items-center justify-between p-2 bg-[#FAF7F7] text-[#8D6E63] text-2xl'>
      <div>
        <h1 className='text-2xl text-[#8D6E63] font-bold'>Zipelas Showcase</h1>
        <Nav />
      </div>
    </header>
  );
}

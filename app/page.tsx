import { db } from '@/prisma/client';

export default async function Home() {
  const posts = await db.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <main className='bg-[#FAF7F7] text-[#8D6E63]'>
      <section className='p-2 grid gap-4'>
        <h2 className='text-xl'>Welcome to Zipelas Showcase</h2>
        {posts.map((post) => (
          <article key={post.id}>
            <span className='text-sm text-[#8D6E63]'>
              Created by: {post.author?.name ?? 'Unknown'}
            </span>
            <h3 className='text-lg text-bold'>{post.title}</h3>
            <p className='text-[#8D6E63]'>{post.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

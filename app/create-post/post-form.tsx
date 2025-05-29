'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { savePost } from '../api/actions';
import { PostCreate, PostSchema } from '../api/schemas';

export default function PostForm() {
  const form = useForm({
    resolver: zodResolver(PostSchema),
  });

  const handleSavePost = async (post: PostCreate) => {
    await savePost(post);
  };

  return (
    <form
      className='grid gap-2 p-2 bg-[#FAF7F7]'
      onSubmit={form.handleSubmit(handleSavePost)}>
      <h1 className='text-[#8D6E63] text-xl'>Create new post</h1>
      <input
        type='text'
        {...form.register('title')}
        placeholder='Title'
        className='p-1 border-2 rounded border-[#8D6E63] text-[#8D6E63] bg-[#FAF7F7]'
      />
      <textarea
        {...form.register('content')}
        placeholder='Content'
        className='p-1 border-2 rounded border-[#8D6E63] text-[#8D6E63] bg-[#FAF7F7]'
      />
      <Button className='w-0.5 p-1 rounded border-2 border-[#8D6E63] text-[#8D6E63] bg-[#FAF7F7] cursor-pointer'>
        Save
      </Button>
    </form>
  );
}

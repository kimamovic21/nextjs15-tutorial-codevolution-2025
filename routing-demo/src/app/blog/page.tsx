import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog Page',
  },
};

const BlogPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('intentional delay');
    }, 1000);
  });

  return (
    <div>BlogPage</div>
  );
};

export default BlogPage;
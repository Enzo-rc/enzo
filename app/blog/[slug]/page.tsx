import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/markdown';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import PostClient from '@/components/PostClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les routes statiques
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), 'd MMMM yyyy', { locale: fr });

  return <PostClient post={post} formattedDate={formattedDate} />;
}

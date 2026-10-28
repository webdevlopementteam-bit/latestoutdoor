import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ContentBlocks from "@/components/ContentBlocks";
import posts from "@/data/posts.json";
import { formatDate } from "../page";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, alternates: { canonical: `/blog/${slug}` }, openGraph: { images: [post.image] } };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title="Blog" crumb={post.title} />
      <article className="px-4 py-16">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-3xl font-bold text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-gray-500">bizmartbharat · {formatDate(post.date)} · Blog</p>
          <div className="relative mt-8 aspect-square w-full overflow-hidden md:aspect-[16/10]">
            <Image src={post.image} alt={post.title} fill priority sizes="900px" className="object-cover" />
          </div>
          <div className="mt-10">
            <ContentBlocks blocks={post.content} />
          </div>
        </div>
      </article>
    </>
  );
}

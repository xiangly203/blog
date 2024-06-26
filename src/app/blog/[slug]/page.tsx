import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Button from "@/app/blog/[slug]/mdx/Button";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

async function getPost(params: Props["params"]) {
    const post = getPostBySlug(params.slug);
    return { post };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Props) {
    const { post } = await getPost(params);

    return (
        <>
            <h1 className="text-2xl">{post.meta.title}</h1>
            <time className="text-gray-600">{post.meta?.date.toString()}</time>
            <MDXRemote source={post.content} components={{Button}} options={{}} />
        </>
    );
}
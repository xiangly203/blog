import Link from "next/link";

import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/postCard";

export default async function Posts() {
    const posts = getAllPosts();

    return (
        <div className="prose grid gap-9 m-auto">
            {posts?.map((post: any) => (
                <Link
                    href={`/blog/${post.slug}`}
                    className="group font-normal overflow-hidden cursor-pointer no-underline transition fade-in-up items-center"
                    key={post.slug}
                >
                    <PostCard
                        title={post.meta?.title}
                        time={post.meta?.date?.toString()}
                        content={post.meta?.content}
                    />
                </Link>
            ))}
        </div>
    );
}
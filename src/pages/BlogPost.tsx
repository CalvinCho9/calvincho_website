import { Component, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { posts } from "../data/posts";

const BlogPost: Component = () => {
  const params = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === params.slug);

  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  if (!post) {
    return (
      <div class="page">
        <A href="/blog" class="blog-back">&larr; Back to Writing</A>
        <p class="blog-empty">Post not found.</p>
      </div>
    );
  }

  return (
    <div class="page">
      <A href="/blog" class="blog-back">&larr; Back to Writing</A>
      <h1 class="blog-post-title">{post.title}</h1>
      <p class="blog-post-date">{post.date}</p>
      <div class="blog-post-body" innerHTML={post.content} />
    </div>
  );
};

export default BlogPost;

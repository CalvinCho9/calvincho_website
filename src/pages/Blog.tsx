import { Component, For, Show, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { posts } from "../data/posts";

const Blog: Component = () => {
  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  return (
    <div class="page">
      <section class="section">
        <h2 class="section-heading">Writing</h2>
        <p class="writing-intro">
          I write about biology, technology, and ideas at the intersection of both.
          Follow along on Substack:
        </p>
        <a
          href="https://substack.com/@calvinhcho"
          target="_blank"
          rel="noopener noreferrer"
          class="substack-link"
        >
          No New Thing on Substack →
        </a>
        <Show when={posts.length > 0}>
          <div class="writing-posts">
            <For each={posts}>
              {(post) => (
                <div class="blog-item">
                  <A href={`/blog/${post.slug}`} class="blog-item-title">{post.title}</A>
                  <p class="blog-item-date">{post.date}</p>
                  <p class="blog-item-excerpt">{post.excerpt}</p>
                </div>
              )}
            </For>
          </div>
        </Show>
      </section>
    </div>
  );
};

export default Blog;

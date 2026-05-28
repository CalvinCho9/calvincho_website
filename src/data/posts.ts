export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  // Add posts here like:
  // {
  //   slug: "my-first-post",
  //   title: "My First Post",
  //   date: "January 2026",
  //   excerpt: "A short description of the post...",
  //   content: `<p>Full HTML content here...</p>`,
  // },
];

import { blogPosts } from "../data/blogData";
import Section from "../components/Section";

function Blog() {
  return (
    <Section sectionClassName="Blog" title="Blog">
      {blogPosts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <small>{post.date}</small>
          <p>{post.content}</p>
          <hr />
        </article>
      ))}
    </Section>
  );
}

export default Blog;

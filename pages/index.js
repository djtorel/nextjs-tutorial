import Link from "next/link";
import Layout from "../components/MyLayout";

function getPosts() {
  return [
    { id: "hello-textjs", title: "Hello Next.js" },
    { id: "learn-nexjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>

    <style jsx>{`
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a: hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx global>{`
      h1,
      a {
        font-family: "Arial";
      }
    `}</style>
  </Layout>
);

export default Index;

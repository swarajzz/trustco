import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "../styles/blog-section.css";

interface BlogSectionProps {
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  seeAllLink: string;
  posts: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    link: string;
  }[];
}

export function BlogSection({
  title,
  titleHighlight,
  titleSuffix,
  seeAllLink,
  posts,
}: BlogSectionProps) {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">
            {title}{" "}
            <span className="blog-title-highlight">{titleHighlight}</span>{" "}
            {titleSuffix}
          </h2>
          <Link href={seeAllLink} className="see-all-link">
            See All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  {post.date}, by {post.author}
                </div>
                <Link href={post.link} className="blog-title-link">
                  {post.title}
                </Link>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link href={post.link} className="read-more-link">
                  Read Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

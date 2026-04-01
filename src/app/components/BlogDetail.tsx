import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, Calendar, Clock, Eye, Heart, Share2 } from "lucide-react";
import RoughBorder from "./RoughBorder";
import rough from "roughjs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function RoughCircle({ size, seed, filled }: { size: number; seed: number; filled?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const node = rc.circle(size / 2, size / 2, size - 4, {
      stroke: "#ff4500",
      strokeWidth: 3,
      roughness: 2,
      seed: seed,
      fill: filled ? "#ff4500" : "none",
      fillStyle: filled ? "solid" : undefined,
    });

    svg.appendChild(node);
  }, [size, seed, filled]);

  return <svg ref={svgRef} width={size} height={size} className="absolute inset-0" />;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  category: string;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  images?: string[];
}

// Mock blog data
const blogPosts: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: "Building Beautiful UIs with Rough Borders",
    excerpt: "Exploring the art of hand-drawn aesthetics in modern web design.",
    content: `
# Introduction

In the world of modern web design, perfection is often the goal. Smooth curves, pixel-perfect alignments, and pristine layouts dominate the landscape. But what if we embraced imperfection instead?

## The Beauty of Imperfection

Hand-drawn aesthetics bring a unique warmth and personality to digital interfaces. They make your website feel more human, more approachable, and more memorable.

### Why Rough Borders?

Rough borders and hand-drawn elements create a distinctive visual style that stands out in a sea of polished, corporate designs. They tell your users: "We're creative, we're different, we're not afraid to break the rules."

## Implementation

Using libraries like RoughJS, we can create beautiful hand-drawn effects with just a few lines of code. The randomness and imperfection are algorithmically generated, ensuring consistency while maintaining that organic feel.

### Key Benefits

- **Personality**: Your design instantly becomes more memorable
- **Differentiation**: Stand out from competitors with cookie-cutter designs  
- **Creativity**: Encourages thinking outside the box
- **User Engagement**: The unique aesthetic captures attention

## Conclusion

Embracing imperfection in design isn't just about aesthetics—it's about creating meaningful connections with your users. Hand-drawn elements make interfaces feel more human, more approachable, and ultimately more engaging.

Try incorporating rough borders into your next project. You might be surprised at how much character they add!
    `,
    date: "2026-03-15",
    readTime: 5,
    category: "Design",
    views: 124,
    author: {
      name: "Jad",
      avatar: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=150&q=80",
    },
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80",
    ],
  },
  2: {
    id: 2,
    title: "My Journey into Full Stack Development",
    excerpt: "From frontend curiosity to backend mastery.",
    content: `
# The Beginning

My journey into full stack development started with a simple question: "How do websites work?" That curiosity led me down a rabbit hole that would change my career forever.

## Frontend First

Like many developers, I started with HTML and CSS. The immediate visual feedback was addictive. Seeing my code come to life in the browser was magical.

### The JavaScript Revelation

Then I discovered JavaScript. Suddenly, my static pages could move, respond, and interact. The possibilities seemed endless.

## Venturing into Backend

But I wanted to understand the whole picture. How does data flow? Where is it stored? How do users authenticate?

### Node.js Changed Everything

Learning Node.js was a game-changer. Using JavaScript on both frontend and backend made full stack development feel approachable and cohesive.

## Database Deep Dive

Understanding databases—from SQL to NoSQL—opened up a new world of possibilities. Data modeling, optimization, and querying became second nature.

## The Full Stack Mindset

Being a full stack developer isn't just about knowing multiple technologies. It's about understanding how all the pieces fit together to create seamless user experiences.

### Continuous Learning

The landscape never stops evolving. New frameworks, new patterns, new best practices. The key is staying curious and never stopping learning.

## Conclusion

My journey from frontend to full stack has been challenging but incredibly rewarding. Every layer of the stack you understand makes you a better developer.

If you're starting out, embrace the complexity. Take it one step at a time. The journey is worth it.
    `,
    date: "2026-03-10",
    readTime: 8,
    category: "Development",
    views: 89,
    author: {
      name: "Jad",
      avatar: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=150&q=80",
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
    ],
  },
  3: {
    id: 3,
    title: "The Power of Tailwind CSS",
    excerpt: "Why utility-first CSS changed my development workflow forever.",
    content: `
# Discovering Tailwind

For years, I wrote traditional CSS. Custom stylesheets, BEM methodology, and carefully organized SASS files. Then I tried Tailwind CSS, and everything changed.

## The Utility-First Approach

At first, it looked messy. Classes like \`flex items-center justify-between\` seemed verbose and inline. But after a few days, I was hooked.

### Speed and Productivity

The biggest benefit? Speed. No more switching between HTML and CSS files. No more thinking of class names. Just rapid prototyping directly in markup.

## Consistency by Default

Tailwind's design system ensures consistency across your entire application. Spacing, colors, typography—all harmonized out of the box.

### Customization

The best part? You can customize everything. The configuration file gives you complete control over your design system.

## Responsive Design Made Easy

Responsive design has never been easier. \`md:flex lg:grid\`—it's all right there in the markup. No media queries to write or manage.

### Dark Mode Support

Built-in dark mode support with the \`dark:\` prefix makes theming a breeze.

## Performance

Despite what you might think, Tailwind is incredibly performant. The production build purges unused classes, resulting in tiny CSS files.

## Developer Experience

The IntelliSense support, the documentation, the community—everything about the Tailwind ecosystem enhances the developer experience.

## Conclusion

Tailwind CSS isn't just a framework—it's a paradigm shift in how we write styles. It might feel weird at first, but give it a real try. Your future self will thank you.

The speed, consistency, and maintainability benefits are undeniable. I can't imagine going back to traditional CSS.
    `,
    date: "2026-03-05",
    readTime: 6,
    category: "CSS",
    views: 156,
    author: {
      name: "Jad",
      avatar: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=150&q=80",
    },
    images: [
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&q=80",
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=1200&q=80",
    ],
  },
};

export function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (id) {
      const blogPost = blogPosts[parseInt(id)];
      setPost(blogPost);

      // Load likes from localStorage
      const savedLikes = localStorage.getItem(`blog-${id}-likes`);
      const userLiked = localStorage.getItem(`blog-${id}-user-liked`);
      
      if (savedLikes) {
        setLikes(parseInt(savedLikes));
      } else {
        // Initialize with mock likes
        const initialLikes = Math.floor(Math.random() * 50) + 10;
        setLikes(initialLikes);
        localStorage.setItem(`blog-${id}-likes`, initialLikes.toString());
      }

      if (userLiked === "true") {
        setIsLiked(true);
      }

      // Increment view count (in real app, this would be on backend)
      if (blogPost) {
        blogPost.views += 1;
      }
    }
  }, [id]);

  const handleLike = () => {
    const newLiked = !isLiked;
    const newLikes = newLiked ? likes + 1 : likes - 1;
    
    setIsLiked(newLiked);
    setLikes(newLikes);
    
    localStorage.setItem(`blog-${id}-likes`, newLikes.toString());
    localStorage.setItem(`blog-${id}-user-liked`, newLiked.toString());
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Blog post not found
          </h2>
          <Link
            to="/blog"
            className="text-[#ff4500] hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Parse markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 mt-8">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-6">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-5">{line.slice(4)}</h3>;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      {/* Decorative circles */}
      <div className="hidden lg:block absolute top-32 right-20 w-24 h-24 opacity-10 pointer-events-none">
        <RoughCircle size={96} seed={900} />
      </div>
      <div className="hidden lg:block absolute top-64 left-16 w-32 h-32 opacity-10 pointer-events-none">
        <RoughCircle size={128} seed={910} />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#ff4500] transition-colors group"
          >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 -m-1">
              <RoughBorder
                width={100}
                height={32}
                roughness={1.5}
                bowing={1}
                seed={920}
                stroke="#ff4500"
                strokeWidth={2}
                fill="#ff4500"
              />
            </div>
            <span className="relative z-10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 inline-block">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#ff4500]"
            />
            <span className="font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {post.readTime} min read
          </div>
          <div className="flex items-center gap-1">
            <Eye size={16} />
            {post.views} views
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700"
        >
          <motion.button
            onClick={handleLike}
            className="relative flex items-center gap-2 group"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-12 h-12">
              <RoughCircle size={48} seed={930} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart
                  size={20}
                  className={`transition-colors ${
                    isLiked
                      ? "fill-[#ff4500] text-[#ff4500]"
                      : "text-gray-600 dark:text-gray-400 group-hover:text-[#ff4500]"
                  }`}
                />
              </div>
            </div>
            <span className={`font-medium ${isLiked ? "text-[#ff4500]" : "text-gray-600 dark:text-gray-400"}`}>
              {likes}
            </span>
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="relative flex items-center gap-2 group"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-12 h-12">
              <RoughCircle size={48} seed={940} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Share2
                  size={20}
                  className="text-gray-600 dark:text-gray-400 group-hover:text-[#ff4500] transition-colors"
                />
              </div>
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-400">Share</span>
          </motion.button>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Images */}
        {post.images && post.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            {post.images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={image}
                    alt={`${post.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Rough border for images */}
                <div className="absolute inset-0 pointer-events-none opacity-50">
                  <RoughBorder
                    width={400}
                    height={256}
                    roughness={2}
                    bowing={1}
                    seed={950 + index}
                    stroke="#ff4500"
                    strokeWidth={2}
                    fill="transparent"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thanks for reading! If you enjoyed this post, don't forget to like and share.
          </p>
          <Link
            to="/blog"
            className="inline-block text-[#ff4500] hover:underline font-medium"
          >
            ← Read more articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

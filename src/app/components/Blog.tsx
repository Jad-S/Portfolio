import { motion, AnimatePresence } from "motion/react";
import { Heart, Calendar, Clock, Eye, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import RoughBorder from "./RoughBorder";
import rough from "roughjs";

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
  date: string;
  readTime: number;
  category: string;
  views: number;
}

// Mock data - later vervangen met echte blog posts
const mockBlogPosts: BlogPost[] = [
  // {
  //   id: 1,
  //   title: "Building Beautiful UIs with Rough Borders",
  //   excerpt: "Exploring the art of hand-drawn aesthetics in modern web design. How imperfection creates personality...",
  //   date: "2026-03-15",
  //   readTime: 5,
  //   category: "Design",
  //   views: 124,
  // },
  // {
  //   id: 2,
  //   title: "My Journey into Full Stack Development",
  //   excerpt: "From frontend curiosity to backend mastery. The story of how I fell in love with building complete solutions...",
  //   date: "2026-03-10",
  //   readTime: 8,
  //   category: "Development",
  //   views: 89,
  // },
  // {
  //   id: 3,
  //   title: "The Power of Tailwind CSS",
  //   excerpt: "Why utility-first CSS changed my development workflow forever. Speed, consistency, and maintainability...",
  //   date: "2026-03-05",
  //   readTime: 6,
  //   category: "CSS",
  //   views: 156,
  // },
];

export function Blog() {
  const [posts] = useState<BlogPost[]>(mockBlogPosts);
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [userLikes, setUserLikes] = useState<Set<number>>(new Set());

  // Load likes from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem("blog-likes");
    const savedUserLikes = localStorage.getItem("blog-user-likes");
    
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    } else {
      // Initialize with mock likes
      const initialLikes: Record<number, number> = {};
      posts.forEach(post => {
        initialLikes[post.id] = Math.floor(Math.random() * 50) + 5;
      });
      setLikes(initialLikes);
    }

    if (savedUserLikes) {
      setUserLikes(new Set(JSON.parse(savedUserLikes)));
    }
  }, [posts]);

  // Save likes to localStorage
  const saveLikes = (newLikes: Record<number, number>, newUserLikes: Set<number>) => {
    localStorage.setItem("blog-likes", JSON.stringify(newLikes));
    localStorage.setItem("blog-user-likes", JSON.stringify(Array.from(newUserLikes)));
  };

  const handleLike = (postId: number) => {
    setLikes(prev => {
      const newLikes = { ...prev };
      if (userLikes.has(postId)) {
        newLikes[postId] = (newLikes[postId] || 0) - 1;
      } else {
        newLikes[postId] = (newLikes[postId] || 0) + 1;
      }
      
      setUserLikes(prevUserLikes => {
        const newUserLikes = new Set(prevUserLikes);
        if (newUserLikes.has(postId)) {
          newUserLikes.delete(postId);
        } else {
          newUserLikes.add(postId);
        }
        saveLikes(newLikes, newUserLikes);
        return newUserLikes;
      });

      return newLikes;
    });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      
      {/* Decorative rough circles - Hidden on mobile */}
      <div className="hidden lg:block absolute top-32 right-20 w-24 h-24 opacity-20 pointer-events-none">
        <RoughCircle size={96} seed={700} />
      </div>
      <div className="hidden lg:block absolute top-64 left-16 w-32 h-32 opacity-15 pointer-events-none">
        <RoughCircle size={128} seed={710} />
      </div>
      <div className="hidden lg:block absolute bottom-40 right-32 w-20 h-20 opacity-25 pointer-events-none">
        <RoughCircle size={80} seed={720} />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 relative z-10">
              Blog
              <span className="text-[#ff4500]">.</span>
            </h1>

            {/* Decorative underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-2"
            >
              <RoughBorder
                width={200}
                height={8}
                roughness={2}
                seed={730}
                stroke="#ff4500"
                strokeWidth={3}
                fill="#ff4500"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Thoughts, ideas, and experiences from my journey in design and development
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid OR Empty State */}
        {posts.length === 0 ? (
          // EMPTY STATE - No blogs yet
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <EmptyState />
          </motion.div>
        ) : (
          // BLOG POSTS GRID
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {posts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                likes={likes[post.id] || 0}
                isLiked={userLikes.has(post.id)}
                onLike={() => handleLike(post.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const update = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="relative">
      {size.w > 0 && size.h > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          <RoughBorder
            width={size.w}
            height={size.h}
            roughness={2.5}
            bowing={2}
            seed={740}
            stroke="#ff4500"
            strokeWidth={3}
            fill="transparent"
          />
        </div>
      )}

      <div ref={containerRef} className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
        {/* Animated pencil icon */}
        <motion.div
          className="relative inline-block mb-6"
          animate={{
            rotate: [-5, 5, -5],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            <RoughCircle size={96} seed={750} />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff4500]"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
          </div>
        </motion.div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon<span className="text-[#ff4500]">...</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          I'm currently working on some exciting content to share with you.
          <br />
          <span className="text-[#ff4500] font-semibold">Stay tuned</span> for stories about design, development, and everything in between!
        </p>

        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {[760, 770, 780].map((seed, i) => (
            <motion.div
              key={seed}
              className="relative w-3 h-3 sm:w-4 sm:h-4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <RoughCircle size={16} seed={seed} filled={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
function BlogCard({
  post,
  index,
  likes,
  isLiked,
  onLike,
}: {
  post: BlogPost;
  index: number;
  likes: number;
  isLiked: boolean;
  onLike: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const update = () => {
      if (!cardRef.current) return; // ✅ Extra null check
      const rect = cardRef.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(cardRef.current);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rough Border */}
      {size.w > 0 && size.h > 0 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <RoughBorder
            width={size.w}
            height={size.h}
            roughness={2}
            bowing={1.5}
            seed={800 + index * 10}
            stroke="#ff4500"
            strokeWidth={isHovered ? 3 : 2}
            fill="transparent"
          />
        </motion.div>
      )}

      <div
        ref={cardRef}
        className="relative z-10 p-6 sm:p-8 bg-white dark:bg-gray-900/50 cursor-pointer"
      >
        {/* Category badge */}
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 -m-1">
            <RoughBorder
              width={80}
              height={28}
              roughness={1.5}
              bowing={1}
              seed={820 + index}
              stroke="#ff4500"
              strokeWidth={2}
              fill="#ff4500"
            />
          </div>
          <span className="relative z-10 text-white text-xs font-bold uppercase tracking-wider px-2 py-1">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#ff4500] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime} min
          </div>
          <div className="flex items-center gap-1">
            <Eye size={14} />
            {post.views}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mb-4" />

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Like button */}
          <motion.button
            onClick={onLike}
            className="relative flex items-center gap-2 group/like"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-10 h-10">
              <RoughCircle size={40} seed={850 + index} />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  size={18}
                  className={`transition-colors ${
                    isLiked
                      ? "fill-[#ff4500] text-[#ff4500]"
                      : "text-gray-600 dark:text-gray-400 group-hover/like:text-[#ff4500]"
                  }`}
                />
              </motion.div>
            </div>
            <span className={`text-sm font-medium ${isLiked ? "text-[#ff4500]" : "text-gray-600 dark:text-gray-400"}`}>
              {likes}
            </span>

            {/* Floating hearts animation */}
            <AnimatePresence>
              {isLiked && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0 }}
                  className="absolute -top-4 left-2"
                >
                  <Heart size={12} className="fill-[#ff4500] text-[#ff4500]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Read more */}
          <Link to={`/blog/${post.id}`} className="relative group/read">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 group-hover/read:text-[#ff4500] transition-colors">
              <span className="font-medium">Read more</span>
              <ArrowRight
                size={16}
                className="group-hover/read:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Corner decorations on hover */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#ff4500]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#ff4500]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
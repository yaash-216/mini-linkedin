import React, { useState, useEffect, useContext } from "react";
import API from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import type { AuthContextType, Post } from "../types";
import Profilepic from "../components/Profilepic";
import { ArrowUp, MessageCircle } from "lucide-react";
import Posts from "../components/Posts";
function Home() {
  const auth = useContext<AuthContextType | null>(AuthContext);
  const user = auth!.user;
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) return;
    await API.post("/posts", { content });
    setContent("");
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      {user && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
        >
          <textarea
            className="resize-none textarea bg-gray-100 w-full textarea-info text-black"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
          <button
            className="self-end bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            type="submit"
          >
            Post
          </button>
        </form>
      )}
      <div className="space-y-6">
        {posts.map((post) => (
          <Posts key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;

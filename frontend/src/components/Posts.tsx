import type { Post } from "../types";
import Profilepic from "./Profilepic";
import { Link } from "react-router";
import { ArrowUp, MessageCircle } from "lucide-react";

function Posts({ post }: { post: Post }) {
    return (
        <div
            key={post._id}
            className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-200 rounded-3xl shadow-xl p-5 flex flex-col gap-5 transition hover:scale-[1.02] hover:shadow-2xl"
        >
            <div className="flex items-center gap-4">
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full ring-4 ring-blue-300 ring-offset-2 overflow-hidden bg-gradient-to-tr from-blue-100 to-purple-100">
                        <Profilepic name={post.user.name} />
                    </div>
                </div>
                <div>
                    <Link
                        to={`/profile/${post.user._id}`}
                        className="text-purple-700 font-bold text-lg hover:underline hover:text-blue-600 transition"
                    >
                        {post.user.name}
                    </Link>
                    <div className="text-xs text-gray-400 mt-1">
                        {new Date(post.createdAt).toLocaleString()}
                    </div>
                </div>
            </div>
            <p className="text-gray-900 text-lg leading-relaxed font-medium px-1">
                {post.content}
            </p>
            <div className="flex gap-8 mt-3">
                <button className="btn btn-ghost btn-md flex items-center gap-2 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-purple-700 rounded-full px-2 py-1 shadow transition">
                    <ArrowUp className="h-5 w-5" />
                    <span className="font-semibold">Like</span>
                </button>
                <button className="btn btn-ghost btn-md flex items-center gap-2 text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-blue-700 rounded-full px-2 py-1 shadow transition">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">Comment</span>
                </button>
            </div>
        </div>
    );
}

export default Posts;

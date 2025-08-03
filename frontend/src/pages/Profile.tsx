import  { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../utils/api";
import type { ProfileType } from "../types";
import Profilepic from "../components/Profilepic";
import { Calendar } from "lucide-react";

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await API.get(`/profile/${id}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center gap-8 bg-white shadow-sm rounded-xl p-5 mb-10">
        <div className="avatar">
          <div className="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center overflow-hidden">
            <Profilepic name={profile.user.name} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-blue-700">
            {profile.user.name}
          </h2>
          <p className="text-gray-500 mt-3 text-lg">{profile.user.bio}</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-6 text-blue-600">Posts</h3>
        <div className="space-y-8">
          {profile.posts.length === 0 ? (
            <div className="text-center text-gray-400 py-10">
              <span className="italic">No posts yet.</span>
            </div>
          ) : (
            profile.posts.map((post) => (
              <div
          key={post._id}
          className="bg-gradient-to-r from-blue-50 via-white to-blue-100 border
           border-blue-200 rounded-xl p-4 shadow transition hover:shadow-lg hover:border-blue-400"
              >
          <p className="mb-4 text-gray-800 text-lg leading-relaxed">
            {post.content}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="flex items-center gap-2">
             <Calendar size={16} />
              {new Date(post.createdAt).toLocaleString()}
            </span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
              Post ID: {post._id.slice(-6)}
            </span>
          </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

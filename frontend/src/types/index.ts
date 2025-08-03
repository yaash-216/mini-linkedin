export interface Linkinterface {
  to: string;
  label: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  bio?: string;
}

export interface Post {
  _id: string;
  user: User;
  content: string;
  createdAt: string;
}

export interface ProfileType {
  _id: string;
  user: User;
  posts: Post[];
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

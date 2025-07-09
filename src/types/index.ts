import { ComponentType } from "react";

export type AIProvider = "chatgpt" | "claude" | "grok" | "gemini";

export interface AIOptions {
  id: AIProvider;
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  description: string;
  model?: string;
}

export interface User {
  uid: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  isAnonymous: boolean;
  emailVerified?: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInAnonymously: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export interface Messages {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
  ai: AIProvider;
  userId?: string;
  chatId?: string;
}

export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  aiProvider: AIProvider;
  messageCount: number;
  lastMessage?: string;
  isAnonymous?: boolean;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

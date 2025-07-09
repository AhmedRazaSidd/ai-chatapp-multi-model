"use client";
import { useRef, useState } from "react";
import ChatInterface from "./ChatInterface";

const HomePageContent = () => {
  const [showAuthModel, setShowAuthModel] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ChatInterface />
    </div>
  );
};

export default HomePageContent;

"use client";
import { useEffect, useRef, useState } from "react";
import ChatInterface from "./ChatInterface";
import { useChat } from "@/hooks/useChat";
import AuthModal from "./AuthModal";
import { useAuth } from "@/hooks/useAuth";
import AppLoading from "./AppLoading";

const HomePageContent = () => {
  const {
    messages,
    isAnonymous,
    isLoading,
    sendMessage,
    selectedAI,
    setSelectedAI,
    currentChatId,
    createNewChat,
  } = useChat();
  const { loading: authLoading } = useAuth();
  const [showAuthModel, setShowAuthModel] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex">
      {authLoading && <AppLoading />}
      <ChatInterface
        messages={messages}
        isAnonymous={isAnonymous}
        isLoading={isLoading}
        sendMessage={sendMessage}
        selectedAI={selectedAI}
        setSelectedAI={setSelectedAI}
        currentChatId={currentChatId}
        createNewChat={createNewChat}
        user={useAuth().user}
        routerPush={(url: string) => window.location.assign(url)}
      />
      <AuthModal
        isOpen={showAuthModel}
        onClose={() => setShowAuthModel(false)}
        mode={authMode}
        onSwitchMode={() => {
          setAuthMode(authMode === "signin" ? "signup" : "signin");
        }}
      />
    </div>
  );
};

export default HomePageContent;

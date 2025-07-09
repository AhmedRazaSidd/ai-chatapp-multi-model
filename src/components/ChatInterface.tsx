"use client";
import { ChevronDown, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import ModeToggle from "./ModeToggle";
import { aiOptions, suggestedPrompt } from "@/constants/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

const ChatInterface = () => {
  const isAnonymous = true;
  const [inputMessage, setInputMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentAI = aiOptions[0];

  const handleSendMessage = () => {
    console.log(inputMessage);
  };

  return (
    <div className="flex flex-col h-screen bg-background w-full">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-4">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center-center space-x-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="ml-8 lg:ml-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="flex">
                  <h1 className="text-lg font-semibold hidden sm:block">
                    AI Chat App
                  </h1>
                  <Badge
                    variant={isAnonymous ? "secondary" : "default"}
                    className="md:ml-2 border border-primary/50"
                  >
                    {isAnonymous ? "Anonymous" : "Sign In"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Multiple AI assistans in one place
                </p>
              </div>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="max-w-[200px] justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`p-1 rounded-sm bg-gradient-to-r ${currentAI.color}`}
                    >
                      <currentAI.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span>{currentAI.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aiOptions.map((ai) => (
                  <DropdownMenuItem key={ai.id}>
                    <div className="flex items-center space-x-3 p-3">
                      <div
                        className={`h-8 w-8 rounded-lg bg-gradient-to-r ${ai.color} flex items-center justify-center`}
                      >
                        <ai.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-medium">{ai?.name}</h2>
                        <p className="text-xs text-muted-foreground">
                          {ai.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      {/* Main Chat Area */}
      <div className="flex-1 py-6 px-4">
        <div className="w-full space-y-6 h-full flex flex-col justify-between">
          {/* Welcome Message */}
          <div>
            <div className="mb-6 bg-gradient-to-r from-purple-500/18 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Welcome to AI Chat App! 🍕
                  </h3>
                  <p className="text-primary/80 text-sm mb-2">
                    {isAnonymous
                      ? "You'r chatting anonymously. Messages won't be saved unless you sign in."
                      : "You'r signed in You chat history will be saved automatically."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs">
                      💭 Type a message below to start
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs">
                      🤖 Switch AI models anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-dashed">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${currentAI.color}`}
                  >
                    <currentAI.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Chat with {currentAI?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentAI.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto pt-4 gap-2">
                    {suggestedPrompt.map((prompt, index) => (
                      <Button
                        key={index}
                        onClick={() => setInputMessage(prompt)}
                        variant="ghost"
                        className="h-auto p-3 text-left justify-start border"
                      >
                        <span>{prompt}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Messages Area */}
          {/* Input Area */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Input
                    ref={inputRef}
                    placeholder={`Message ${currentAI.name}...`}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="min-h-12"
                    //disabledf
                  />
                </div>
                <Button
                  className="h-12 w-12"
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

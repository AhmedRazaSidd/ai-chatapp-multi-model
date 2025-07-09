import { AIOptions } from "@/types";
import { Cpu, MessageCircle, Zap } from "lucide-react";

export const aiOptions: AIOptions[] = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        icon: MessageCircle,
        color: "from-green-400 to-emerald-500",
        description: "OpenAI's powerfull language model"
    },
    {
        id: "grok",
        name: "Grok",
        icon: Zap,
        color: "from-blue-400  to-purple-500",
        description: "X's witty AI companion"
    },
    {
        id: "gemini",
        name: "Gemini",
        icon: Cpu,
        color: "from-pink-400  to-rose-500",
        description: "Google's Multimodel AI"
    }

]

export const suggestedPrompt: string[] = [
    "What can you help me with?",
    "Explain quantum computing",
    "Write a creative story",
    "Help me code a function",
];

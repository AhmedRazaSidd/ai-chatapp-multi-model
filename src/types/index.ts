import { ComponentType } from "react";

export type AIProvider = "chatgpt" | "claude" | "grok" | "gemini";

export interface AIOptions {
    id: AIProvider,
    name: string,
    icon: ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string,
    description: string;
    model?: string
}
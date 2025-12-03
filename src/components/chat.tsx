"use client";

import { useChat } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { useRef, useEffect } from "react";
import Markdown from "react-markdown";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat({
      api: "/api/chat",
    });

  const isLoading = status === "streaming" || status === "submitted";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] max-h-[70vh] w-full border rounded-lg overflow-hidden bg-white dark:bg-background">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-600 dark:text-muted-foreground">
            <Bot className="size-12 mb-4 opacity-50" />
            <p className="text-lg font-medium text-gray-800 dark:text-foreground">Hi! I&apos;m Chonghan&apos;s AI Assistant</p>
            <p className="text-sm mt-2 max-w-md text-gray-600 dark:text-muted-foreground">
              Ask me anything about his experience, skills, projects, or education.
              I&apos;m here to help recruiters and hiring managers learn more about him!
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {[
                "What are his main skills?",
                "Tell me about his work experience",
                "What projects has he worked on?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    const fakeEvent = {
                      target: { value: suggestion },
                    } as React.ChangeEvent<HTMLInputElement>;
                    handleInputChange(fakeEvent);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-border text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-muted transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 items-start",
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center size-8 rounded-full shrink-0",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-200 dark:bg-muted"
              )}
            >
              {message.role === "user" ? (
                <User className="size-4" />
              ) : (
                <Bot className="size-4 text-gray-700 dark:text-foreground" />
              )}
            </div>
            <div
              className={cn(
                "rounded-lg px-4 py-2 max-w-[80%]",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-100 dark:bg-muted text-gray-900 dark:text-foreground"
              )}
            >
              <Markdown className="prose prose-sm prose-gray dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 text-inherit">
                {message.content}
              </Markdown>
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-3 items-start">
            <div className="flex items-center justify-center size-8 rounded-full bg-gray-200 dark:bg-muted shrink-0">
              <Bot className="size-4 text-gray-700 dark:text-foreground" />
            </div>
            <div className="rounded-lg px-4 py-2 bg-gray-100 dark:bg-muted">
              <Loader2 className="size-4 animate-spin text-gray-700 dark:text-foreground" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-gray-200 dark:border-border p-4 flex gap-2 items-center bg-white dark:bg-background"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything about Chonghan..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-border rounded-lg bg-white dark:bg-background text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </Button>
      </form>
    </div>
  );
}


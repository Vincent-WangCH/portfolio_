import BlurFade from "@/components/magicui/blur-fade";
import { Chat } from "@/components/chat";
import { DATA } from "@/data/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
  description: `Chat with an AI assistant to learn more about ${DATA.name}`,
};

const BLUR_FADE_DELAY = 0.04;

export default function ChatPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 pb-20">
      <section id="chat-header">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            💬 Chat with Me
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground mt-2">
            Have questions about my experience, skills, or projects? My AI
            assistant is here to help! Ask anything you&apos;d like to know.
          </p>
        </BlurFade>
      </section>

      <section id="chat-interface">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Chat />
        </BlurFade>
      </section>
    </main>
  );
}


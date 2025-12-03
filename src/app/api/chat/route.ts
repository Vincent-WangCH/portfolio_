import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { DATA } from "@/data/resume";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Build resume context from DATA
function buildResumeContext(): string {
  const skills = DATA.skills.join(", ");

  const workExperience = DATA.work
    .map(
      (job) =>
        `- ${job.title} at ${job.company} (${job.start} - ${job.end}, ${job.location}): ${job.description}`
    )
    .join("\n");

  const education = DATA.education
    .map(
      (edu) =>
        `- ${edu.degree} from ${edu.school} (${edu.start} - ${edu.end})`
    )
    .join("\n");

  const projects = DATA.projects
    .map(
      (proj) =>
        `- ${proj.title} (${proj.dates}): ${proj.description} Technologies: ${proj.technologies.join(", ")}`
    )
    .join("\n");

  return `
    # Resume Information for ${DATA.name}

    ## Contact
    - Location: ${DATA.location}
    - Email: ${DATA.contact.email}
    - Phone: ${DATA.contact.tel}
    - GitHub: ${DATA.contact.social.GitHub.url}
    - LinkedIn: ${DATA.contact.social.LinkedIn.url}

    ## Summary
    ${DATA.summary}

    ## Description
    ${DATA.description}

    ## Skills
    ${skills}

    ## Work Experience
    ${workExperience}

    ## Education
    ${education}

    ## Projects
    ${projects}
    `.trim();
    }

    const SYSTEM_PROMPT = `You are a helpful assistant representing ${DATA.name}. You answer questions from recruiters, hiring managers, and anyone interested in learning about ${DATA.name}'s professional background.

    Use the following resume information to answer questions accurately and professionally. Be friendly, concise, and helpful. If asked about something not in the resume, politely explain that you can only provide information based on the available resume data.

    ${buildResumeContext()}

    Guidelines:
    - Be professional but personable
    - Highlight relevant skills and experiences when appropriate
    - If asked about availability or salary, suggest they reach out directly via email
    - Keep responses concise but informative
    - You can elaborate on projects and experiences with reasonable inferences based on the technologies and descriptions provided`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    // Try Gemini first
    const result = streamText({
      model: google("gemini-2.0-flash"),
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toDataStreamResponse();
  } catch {
    // Fallback to OpenAI
    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toDataStreamResponse();
  }
}


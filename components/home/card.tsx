import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { usePromptModal } from "./prompt-modal";

export default function Card({
  title,
  description,
  large,
  githubPath,
  prompt,
  readme
}: {
  title: string;
  description: string;
  githubPath: string;
  prompt: string;
  readme: string;
  large?: boolean;
}) {
  const { PromptModal, setShowPromptModal } = usePromptModal();

  return (
    <div
      className={`relative col-span-1 min-h-72 p-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <PromptModal githubPath={githubPath} prompt={prompt} readme={readme} />
      
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose">
          <Balancer>
            <p className='py-4'>{description}</p>

            <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowPromptModal(true)}
                >
                  Learn More
                </button>
          </Balancer>
        </div>
      </div>
    </div>
  );
}

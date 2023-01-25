import Modal from "@/components/shared/modal";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Github } from "@/components/shared/icons";

const PromptModal = ({
  showPromptModal,
  setShowPromptModal,
  prompt,
  githubPath,
  name,
  readme
}: {
  showPromptModal: boolean;
  setShowPromptModal: Dispatch<SetStateAction<boolean>>;
  prompt: string;
  readme: string;
  githubPath: string;
  name: string;
}) => {
  return (
    <Modal showModal={showPromptModal} setShowModal={setShowPromptModal}>
      <div className="w-full overflow-hidden shadow-xl w-2/3 rounded-2xl border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-left md:px-16">
          <h3 className="font-display text-2xl font-bold">{name}</h3>
          <p className="w-full text-gray-500">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  {...props}
                  className="text-3xl text-gray-800 transition-colors py-4"
                />
              ),
              p: ({ node, ...props }) => (
                <span
                  {...props}
                  className="py-2"
                />
              ), 
              ol: ({ node, ...props }) => (
                <ol
                  {...props}
                  className="list-disc pl-8"
                />
              ), 
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}>
            {readme}
          </ReactMarkdown>
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <Link href={githubPath} target='_blank'>
            <button
              className={`${
                "border border-gray-200 bg-white text-black hover:bg-gray-50"
              } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            >
              <p><Github className="h-5 w-5 inline" /> View on Github</p>
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export function usePromptModal() {
  const [showPromptModal, setShowPromptModal] = useState(false);

  const PromptModalCallback = useCallback((props: any) => {
    return (
        <PromptModal
            {...props}
            showPromptModal={showPromptModal}
            setShowPromptModal={setShowPromptModal}
        />
    );
  }, [showPromptModal, setShowPromptModal]);

  return useMemo(
    () => ({ setShowPromptModal, PromptModal: PromptModalCallback }),
    [setShowPromptModal, PromptModalCallback],
  );
}

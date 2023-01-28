import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const prisma = new PrismaClient()

  return {
    props: {
      prompts: await prisma.langChainPrompt.findMany(),
      agents: await prisma.langChainAgent.findMany()
    }
  }
}

export default function Home({ prompts, agents, chains }: { prompts: any, agents: any, chains: any }) {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/hwchase17/status/1617905881336926208"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing LangChainHub
          </p>
        </motion.a>

        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>LangChainHub UI</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            An easy way to browse every <a href='https://github.com/hwchase17/langchain-hub'>LangChainHub</a> project.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/hwchase17/langchain-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>LangChainHub</p>
          </a>

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/fanahova/langchainhub-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>LangChainHub UI</p>
          </a>
        </motion.div>
      </motion.div>

      <div className="mt-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <div className="relative col-span-1 min-h-72 overflow-hidden">
            <div className="mx-auto max-w-md text-left">
              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold text-transparent">
                <Balancer>Prompts</Balancer>
              </h2>
            </div>
        </div>
      </div>

      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {prompts.map(({ name, prompt, readme, description, githubPath }: { name: string, prompt: string, readme: string, description: string, githubPath: string}) => (
          <Card
              key={githubPath}
              githubPath={githubPath}
              prompt={prompt}
              readme={readme}
              title={name}
              description={description}
            />
        ))}
      </div>

      <div className="mt-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <div className="relative col-span-1 min-h-72 overflow-hidden">
            <div className="mx-auto max-w-md text-left">
              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold text-transparent">
                <Balancer>Agents</Balancer>
              </h2>
            </div>
        </div>
      </div>

      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {agents.map(({ name, prompt, readme, description, githubPath }: { name: string, prompt: string, readme: string, description: string, githubPath: string}) => (
          <Card
              key={githubPath}
              githubPath={githubPath}
              prompt={prompt}
              readme={readme}
              title={name}
              description={description}
            />
        ))}
      </div>

      <div className="mt-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <div className="relative col-span-1 min-h-72 overflow-hidden">
            <div className="mx-auto max-w-md text-left">
              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold text-transparent">
                <Balancer>Chains</Balancer>
              </h2>

              <p className='mt-4 w-full'>READMEs not available. Browse the chains <a className='text-green-500 underline' href='https://github.com/hwchase17/langchain-hub/tree/master/chains' target='_blank'>here</a>.</p>
            </div>
        </div>
      </div>
    </Layout>
  );
}
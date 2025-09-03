import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import { Link } from "next-view-transitions";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 mr-1.5 mb-2 sm:mr-2">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <section>
      <div className="space-y-10 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <Image
            src="/images/shinjie.jpg"
            alt="Shin Jie"
            width={100}
            height={100}
            className="rounded-full ring-2 ring-neutral-100 dark:ring-neutral-800 sm:w-[120px] sm:h-[120px]"
            priority
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 sm:mb-2">
              Shin Jie
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              software engineer
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Now
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span className="flex flex-wrap items-center">
                Software Engineer (Frontend) @&nbsp;
                <Link
                  href="https://manus.im"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Manus
                </Link>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span>
                Living in <span className="font-medium">📍 Singapore</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span className="flex flex-wrap items-center">
                Recently listening to&nbsp;
                <Link
                  href="https://www.youtube.com/watch?v=vR6_ZVKEhJ4"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Ne-Yo Tiny Desk Concert 🎶
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Tech Stack
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xs sm:text-sm uppercase text-neutral-500 dark:text-neutral-400 font-medium mb-2">
                Frontend
              </h3>
              <div className="flex flex-wrap">
                <TechBadge>React</TechBadge>
                <TechBadge>Next.js</TechBadge>
                <TechBadge>TypeScript</TechBadge>
                <TechBadge>React Native</TechBadge>
                <TechBadge>TailwindCSS</TechBadge>
                <TechBadge>Shadcn UI</TechBadge>
              </div>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm uppercase text-neutral-500 dark:text-neutral-400 font-medium mb-2">
                Backend
              </h3>
              <div className="flex flex-wrap">
                <TechBadge>Node.js</TechBadge>
                <TechBadge>NestJS</TechBadge>
                <TechBadge>TypeORM</TechBadge>
                <TechBadge>MySQL</TechBadge>
                <TechBadge>Firebase</TechBadge>
                <TechBadge>REST API</TechBadge>
              </div>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm uppercase text-neutral-500 dark:text-neutral-400 font-medium mb-2">
                Tools & Infrastructure
              </h3>
              <div className="flex flex-wrap">
                <TechBadge>Docker</TechBadge>
                <TechBadge>GitHub Actions</TechBadge>
                <TechBadge>Terraform</TechBadge>
                <TechBadge>Google Cloud</TechBadge>
                <TechBadge>Vite</TechBadge>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            What I've Been Doing
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span>Web and mobile application development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span>API development and database design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span>Cloud infrastructure setup with IaC</span>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Previously
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span className="flex flex-wrap items-center">
                Building Alternative Assets Ecosystem @&nbsp;
                <Link
                  href="https://alta.exchange/about-alta"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  Alta
                </Link>
                <span className="text-neutral-500 text-sm ml-1">
                  (formerly known as Fundnel)
                </span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-neutral-500 mt-1 flex-shrink-0">→</span>
              <span>
                Building modern web apps @{" "}
                <Link
                  href="https://aegis-technologies.com.sg/"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors inline-flex"
                >
                  Aegis Technologies
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.proofpoint.com/us/dathena-is-now-proofpoint"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors inline-flex"
                >
                  Dathena
                </Link>{" "}
                <span className="text-neutral-500 text-sm">(now ProofPoint)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Little About Me
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>Born and raised in Penang, Malaysia 🌴</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>Enjoy comedy and design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 flex-shrink-0">•</span>
              <span>
                <Link
                  href="https://www.16personalities.com/isfp-personality"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  ISFP</Link>
                {" "}
                <span className="text-neutral-500 text-sm">(Last tested in July 2025)</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4 sm:mb-6">
          Blog Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}

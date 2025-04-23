import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <Image
            src="/images/shinjie.jpg"
            alt="Shin Jie"
            width={120}
            height={120}
            className="rounded-full ring-2 ring-neutral-100 dark:ring-neutral-800"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Shin Jie</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              software engineer
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Now
          </h2>
          <p className="flex items-center gap-2">
            <span className="text-neutral-500">→</span>
            Building Alternative Assets Ecosystem @{" "}
            <Link
              href="https://alta.exchange/about-alta"
              target="_blank"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
            >
              Alta
            </Link>
            <span className="text-neutral-500 text-sm">
              (formerly known as Fundnel)
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-neutral-500">→</span>
            Living in <span className="font-medium">📍 Singapore</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-neutral-500">→</span>
            Recently listening to{" "}
            <Link
              href="https://www.youtube.com/watch?v=vR6_ZVKEhJ4"
              target="_blank"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
            >
              Ne-Yo Tiny Desk Concert 🎶
            </Link>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Previously
          </h2>
          <p className="flex items-start gap-2">
            <span className="text-neutral-500 mt-1">→</span>
            <span>
              Building modern web apps @{" "}
              <Link
                href="https://aegis-technologies.com.sg/"
                target="_blank"
                className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
              >
                Aegis Technologies
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.proofpoint.com/us/dathena-is-now-proofpoint"
                target="_blank"
                className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
              >
                Dathena
              </Link>{" "}
              <span className="text-neutral-500 text-sm">(now ProofPoint)</span>
            </span>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
            Little about me
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-neutral-400">•</span>
              <span>Born and raised in Penang, Malaysia 🌴</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-400">•</span>
              <span>Enjoy comedy and design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-400">•</span>
              <span>
                <Link
                  href="https://www.16personalities.com/intp-personality"
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium transition-colors"
                >
                  INTP
                </Link>{" "}
                <span className="text-neutral-500 text-sm">
                  (Last tested Feb 2025)
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-6">
          Blog Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}

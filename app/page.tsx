import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <div className="flex items-center gap-6 mb-4">
          <Image
            src="/images/shinjie.jpg"
            alt="Shin Jie"
            width={96}
            height={96}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Shin Jie</h1>
            <h2>software engineer</h2>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-medium mb-4">Now</h2>
          <div>
            <p>
              Building Alternative Assets Ecosystem @{" "}
              <Link href="https://alta.exchange/about-alta" target="_blank">
                Alta (formerly known as Fundnel)
              </Link>
            </p>
            <p>Living in 📍 Singapore</p>
            <p>
              Recently listening to{" "}
              <Link
                href="https://www.youtube.com/watch?v=vR6_ZVKEhJ4"
                target="_blank"
              >
                Ne-Yo Tiny Desk Concert 🎶
              </Link>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-medium mb-4">Previously</h2>
          <p>
            Building modern web apps @{" "}
            <Link href="https://aegis-technologies.com.sg/" target="_blank">
              Aegis Technologies
            </Link>
            ,{" "}
            <Link
              href="https://www.proofpoint.com/us/dathena-is-now-proofpoint"
              target="_blank"
            >
              Dathena (now ProofPoint)
            </Link>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="font-medium mb-4">Little about me</h2>
          <ul>
            <li>· Born and raised in Penang, Malaysia 🌴</li>
            <li>· Enjoy comedy and design</li>
            <li>
              ·{" "}
              <Link
                href="https://www.16personalities.com/intp-personality"
                target="_blank"
              >
                INTP
              </Link>{" "}
              (Last tested Feb 2025)
            </li>
          </ul>
        </div>
      </div>

      <h2 className="font-medium mb-4">Blog Posts</h2>
      <BlogPosts />
    </section>
  );
}

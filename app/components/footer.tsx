function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-400"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 mb-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
      <ul className="flex flex-col space-y-3 sm:flex-row sm:space-x-6 sm:space-y-0">
        <li>
          <a
            className="flex items-center text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/tanshinjie"
          >
            <ArrowIcon />
            <span className="ml-2 font-medium">github</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tanshinjie/"
          >
            <ArrowIcon />
            <span className="ml-2 font-medium">linkedin</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Shin Jie
      </p>
    </footer>
  );
}

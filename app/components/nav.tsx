import { Link } from "next-view-transitions";

const navItems = {
  "/": {
    name: "home",
  },
  "/blogs": {
    name: "blogs",
  },
  "/projects": {
    name: "projects",
  },
  "/others": {
    name: "others",
  },
};

export function Navbar() {
  return (
    <aside className="mb-12">
      <nav className="flex overflow-x-auto pb-2 no-scrollbar">
        <div className="flex space-x-0">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="group transition-all font-medium relative py-2 px-4 first:pl-0 flex items-center justify-center"
              >
                <span className="relative">
                  {name}
                  <span className="absolute -bottom-1 left-1/2 w-[80%] h-[1px] bg-neutral-800 dark:bg-neutral-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center -translate-x-1/2"></span>
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

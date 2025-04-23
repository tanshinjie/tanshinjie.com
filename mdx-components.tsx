import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type ImageProps = ComponentPropsWithoutRef<"img">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-lg font-bold mt-6 mb-3" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal list-inside mb-4 pl-4" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc list-inside mb-4 pl-4" {...props} />
  ),
  li: (props: ListItemProps) => <li className="mb-2" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => {
    if (typeof props.children === "string") {
      const codeHTML = highlight(props.children);
      return (
        <code
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm"
          {...props}
        />
      );
    }
    return <code {...props}>{props.children}</code>;
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"
      {...props}
    />
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="border-collapse border border-gray-300 dark:border-gray-700 my-6 w-full">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th
              key={index}
              className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="border border-gray-300 dark:border-gray-700 p-2"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4"
      {...props}
    />
  ),
  img: ({ src, alt, className, ...props }: ImageProps) => (
    <Image
      {...props}
      className={`h-auto w-full rounded-lg ${className || ""}`}
      src={src || ""}
      alt={alt || ""}
      width={720}
      height={400}
      sizes="(min-width: 768px) 720px, 100vw"
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
};

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...components,
  };
}

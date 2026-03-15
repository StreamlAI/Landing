import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const components: Components = {
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl md:text-5xl font-bold mb-8 mt-12 tracking-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 mt-10 tracking-tight"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl md:text-3xl font-bold mb-4 mt-8 tracking-tight"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-xl md:text-2xl font-bold mb-4 mt-6 tracking-tight"
        {...props}
      >
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5
        className="text-lg md:text-xl font-bold mb-3 mt-6 tracking-tight"
        {...props}
      >
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6
        className="text-base md:text-lg font-bold mb-3 mt-6 tracking-tight"
        {...props}
      >
        {children}
      </h6>
    ),
    p: ({ children, ...props }) => (
      <p className="text-lg leading-relaxed mb-6 text-[#4A4A4A]" {...props}>
        {children}
      </p>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-[#E63946] font-medium hover:underline transition-all"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-none space-y-3 mb-6 pl-0" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 pl-4" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-lg leading-relaxed text-[#4A4A4A] flex items-start" {...props}>
        <span className="inline-block w-2 h-2 bg-[#E63946] mt-2 mr-4 flex-shrink-0"></span>
        <span className="flex-1">{children}</span>
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-[#1D3557] pl-6 py-4 mb-6 bg-[#FAFAFA] italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ inline, children, ...props }: any) => {
      if (inline) {
        return (
          <code
            className="bg-[#E5E5E5] text-[#1A1A1A] px-2 py-1 font-mono text-sm"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code
          className="block bg-[#1D3557] text-white p-6 mb-6 overflow-x-auto font-mono text-sm leading-relaxed"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre className="mb-6 overflow-x-auto" {...props}>
        {children}
      </pre>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-bold text-[#1A1A1A]" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    hr: ({ ...props }) => (
      <hr className="border-t-2 border-[#1A1A1A] my-12" {...props} />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table
          className="w-full border-2 border-[#1A1A1A]"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-[#1D3557] text-white" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody {...props}>{children}</tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr className="border-b-2 border-[#1A1A1A]" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th className="p-4 text-left font-bold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="p-4 text-[#4A4A4A]" {...props}>
        {children}
      </td>
    ),
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

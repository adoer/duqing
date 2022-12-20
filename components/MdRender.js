import ReactMarkdown from 'react-markdown'
// import rehypeHighlight from 'rehype-highlight'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
// import rehypeRaw from 'rehype-raw'// 在解析md里的html
import mdRenderStyle from "./MdRender.module.sass"
const mdRender = ({ mdStr }) => {
  return <ReactMarkdown
    className={mdRenderStyle.codeblock}
    remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkToc]]}
    // rehypePlugins={[rehypeRaw]}
    children={mdStr}
    components={{
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            showLineNumbers={false}
            lineNumberStyle={{}}
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={mdRenderStyle["primary-code"]} {...props}>
            {children}
          </code>
        )
      },
      h1: ({ node, ...props }) => <h1 id={node.children[0].value} {...props} />,
      h2: ({ node, ...props }) => <h2 id={node.children[0].value} {...props} />,
      h3: ({ node, ...props }) => <h3 id={node.children[0].value} {...props} />,
      h4: ({ node, ...props }) => <h4 id={node.children[0].value} {...props} />,
      h5: ({ node, ...props }) => <h5 id={node.children[0].value} {...props} />,
      h6: ({ node, ...props }) => <h6 id={node.children[0].value} {...props} />,
    }}
  />
}
export default mdRender;

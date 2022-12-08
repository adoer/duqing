import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import mdRenderStyle from "./MdRender.module.sass"
const mdRender = ({ mdStr, className }) => {
  return <ReactMarkdown
    className={mdRenderStyle.codeblock}
    remarkPlugins={[rehypeHighlight, [remarkGfm, { singleTilde: false }]]}
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
      }
    }}
  />
}
export default mdRender;

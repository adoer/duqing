import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import HtmlRenderStyle from "./HtmlRender.module.sass"
const HtmlRender = ({ html, className }) => {
  return <ReactMarkdown
    className={HtmlRenderStyle.codeblock}
    remarkPlugins={[rehypeHighlight, [remarkGfm, { singleTilde: false }]]}
    children={html}
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
          <code className={HtmlRenderStyle["primary-code"]} {...props}>
            {children}
          </code>
        )
      }
    }}
  />
}
export default HtmlRender;

import ReactMarkdown from 'react-markdown'
// import rehypeHighlight from 'rehype-highlight'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'// 在解析md里的html
import mdRenderStyle from "./MdRender.module.sass"
const mdRender = ({ mdStr }) => {
  return <ReactMarkdown
    className={mdRenderStyle.codeblock}
    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
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
      }
    }}
  />
}
export default mdRender;

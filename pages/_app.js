// import '../styles/globals.css';
// import "../styles/test.css"
import Head from "next/head"
import Link from 'next/link'
import "../styles/global.sass"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>duqing</title>
        <meta name="description" content="duqing site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="top-bar">
        <h1 className="title">有感 </h1>
        <div className="nav-line">
          <Link className="nav-link" href="/">有感</Link>
          <Link className="nav-link" href="/archive">有记</Link>
          <Link className="nav-link" href="/interesting">有趣</Link>
          <Link className="nav-link" href="/about">有我</Link>
        </div>
      </header>
      <article className="article">
        <Component {...pageProps} />
      </article>
      <footer>
        <hr />
        <a href="https://github.com/adoer" target="_blank">Github</a>
        <span className="separator">·</span>
        <a href="mailto:g@duqing.ink" target="_blank">i@duqing.ink</a>
        <small>
          <time>2022</time>  © Du Qing.
        </small>
      </footer>
    </>
  )
}

export default MyApp

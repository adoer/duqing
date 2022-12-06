import "../styles/global.sass"
import Head from "next/head"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const navRenderData = [
    {
      path: "/",
      title: "有感",
    },
    {
      path: "/archive",
      title: "有记"
    },
    {
      path: "/interesting",
      title: "有趣"
    },
    {
      path: "/about",
      title: "有我"
    },
  ]

  function navClick(e) {
    console.log(e);
  }
  function titleClick(e) {
    console.log(router);
  }
  const [pageTitle, setPageTitle] = useState("")

  useEffect(() => {
    setPageTitle(router.query.title || "有感");
  });

  return (
    <>
      <Head>
        <title>duqing</title>
        <meta name="description" content="duqing site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="title" onClick={titleClick}>{pageTitle}</h1>
        {
          navRenderData.some(val => val.path === router.pathname) && <div className="nav-line">
            {
              navRenderData.map(el => {
                return router.pathname === el.path ?
                  <span key={el.title} className="nav-link">{el.title}</span> :
                  <Link key={el.title}
                    className="nav-link"
                    as={el.path}
                    href={{
                      pathname: el.path,
                      query: { title: el.title },
                    }}>{el.title}
                  </Link>
              })
            }
          </div>
        }
      </header>
      <article className="article">
        <Component {...pageProps} />
      </article>
      <footer>
        <hr />
        <a href="https://github.com/adoer" target="_blank">Github</a>
        <span className="separator">·</span>
        <a href="mailto:i@duqing.ink" target="_blank">i@duqing.ink</a>
        <small>
          <time>2022</time>  © Du Qing.
        </small>
      </footer>
    </>
  )
}

export default MyApp

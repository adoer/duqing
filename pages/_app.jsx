import "../styles/global.sass"
import store from '../store/store'
import { Provider } from 'react-redux'
import Head from "next/head"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import { Counter } from '../components/Counter'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const navRenderData = [
    {
      path: "/",
      title: "Essay",
    },
    // {
    //   path: "/archive",
    //   title: "有记"
    // },
    {
      path: "/fun",
      title: "Fun"
    },
    // {
    //   path: "/xerduo",
    //   title: "小耳朵"
    // },
    {
      path: "/projects",
      title: "Projects"
    },
    {
      path: "/about",
      title: "About"
    },
  ]

  function titleClick(e) {
    router.push('/')
  }
  const [pageTitle, setPageTitle] = useState("")

  useEffect(() => {
    let title = router.query.title
    if (!title) {
      // const obj = navRenderData.find(el => location.pathname === el.path)
      // location 只能在 useEffect 获取
      title = location.pathname
      if (title === '/') {
        title = navRenderData[0].title
      } else {
        title = title.substring(1, 2).toLocaleUpperCase() + title.substring(2)
      }
    }
    setPageTitle(title, [pageTitle])
  })

  return (
    <Provider store={store}>
      <Head>
        <title>Du Qing</title>
        <meta name="description" content="duqing site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 alt="Back home" className="title" onClick={titleClick}>{pageTitle}</h1>
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
        <span className="separator">·</span>
        <a href="https://xerduo.com" target="_blank">xerduo.com</a>
        <small>
          <time>{new Date().getFullYear()}</time>  © Du Qing.
          <a href="./feed.xml" target="_blank" style={{ float: "right" }}>RSS</a>
        </small>
      </footer>
    </Provider>
  )
}

export default MyApp

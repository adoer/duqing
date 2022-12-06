import pStyle from "./PostList.module.sass"
import Link from 'next/link'
const PostList = ({ data }) => {
  return <div className="PostList">
    {
      data.map(el => {
        const date = el.date.split(" ")[0]
        return <div className="wrap" key={el._id}>
          <Link
            className={pStyle.link}
            as={el._id}
            href={{
              pathname: el._id,
              query: {
                ...el
              },
            }}>
            <h3 className={pStyle.title}>{el.title}</h3>
            <time className={pStyle.date}>{date}</time>
          </Link>
        </div>
      })
    }
  </div>
}
export default PostList;

import pStyle from "./ProjectList.module.sass"
const ProjectList = ({ data }) => {
  return <div className="lab">
    {
      data.map(el => {
        return <a className={pStyle.item} href={el.herf} key={el.title} target="_blank">
          <span className={pStyle.title}>{el.title}</span>
          <span className={pStyle.des}>{el.des}</span>
        </a>
      })
    }
  </div>
}
export default ProjectList

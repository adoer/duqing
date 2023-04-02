import pStyle from "./ProjectList.module.sass"
const ProjectList = ({ data }) => {
  return <div className="lab">
    {
      data.map((el: any) => {
        return <a className={pStyle.item} href={el.herf} key={el.title} target="_blank">
          <span className={pStyle.title}>{el.title}</span>
          <span className={pStyle.des}>{el.des}</span>
          {
            el.logo &&
            <img
              style={{ width: "16px", marginLeft: "3px", filter: "grayscale(0)" }}
              src={el.logo} alt="" />
          }

        </a>
      })
    }
  </div>
}
export default ProjectList

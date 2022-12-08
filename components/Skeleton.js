import skStyle from "./Skeleton.module.sass"
const Skeleton = () => {
  return <div className={skStyle.Skeleton}>
    <ul>
      <li>
        <div>
          <div>
            <span></span>
          </div>
          <div>
            <h3></h3>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div >
}
export default Skeleton;

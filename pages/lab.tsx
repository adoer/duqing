import ProjectList from '../components/projectList/ProjectList'
const lab = function () {
  const data: any[] = [
    {
      title: 'xerduo',
      herf: 'https://xerduo.com',
      des: 'A blog base on hexo',
    },
    {
      title: 'Tetris',
      herf: 'https://tetris.duqing.ink',
      des: 'Tetris AI game 🎮',
    },
    {
      title: 'BPM design editor',
      herf: 'https://bpm.duqing.ink',
      des: 'A BPM design editor',
    },
    {
      title: 'ImgUpload',
      herf: 'https://imgupload.duqing.ink',
      des: 'Image upload with image cropping features',
    },
  ]
  return (
    <>
      <ProjectList data={data}></ProjectList>
    </>
  )
}
export default lab
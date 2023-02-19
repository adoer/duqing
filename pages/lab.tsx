import ProjectList from '../components/projectList/ProjectList'
const lab = function () {
  const data: any[] = [
    {
      title: 'xerduo',
      herf: 'https://xerduo.com',
      des: 'A blog base on Hexo',
    },
    {
      title: 'Tetris',
      herf: 'https://tetris.duqing.ink',
      des: 'Tetris AI game 🎮',
    },
    {
      title: 'BPM design editor',
      herf: 'https://bpm.duqing.ink',
      des: 'Design editor for BPM',
    },
    {
      title: 'Auto-i18n',
      herf: 'https://github.com/adoer/auto-i18n',
      des: 'A tool for vue-i18n use',
    },
    {
      title: 'ImgUpload',
      herf: 'https://imgupload.duqing.ink',
      des: 'Cropping image',
    },
  ]
  return (
    <>
      <ProjectList data={data}></ProjectList>
    </>
  )
}
export default lab
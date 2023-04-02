import ProjectList from '../components/projectList/ProjectList'
const Projects = function () {
  const data: any[] = [
    {
      title: 'xerduo',
      logo: './images/xerduo.ico',
      herf: 'https://xerduo.com',
      des: 'A blog base on Hexo',
    },
    {
      title: 'iChat',
      logo: './images/ichat.ico',
      herf: 'https://ichatt.cn',
      des: 'AI-powered chatbot',
    },
    {
      title: 'Tetris',
      logo: './images/teris.ico',
      herf: 'https://tetris.duqing.ink',
      des: 'Tetris game with AI',
      // des: 'Tetris game with AI 🎮',
    },
    {
      logo: "./images/bpm.svg",
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
export default Projects
import Page from '../../components/Page'
import Dot from '../../components/Dot'
import ProjectList from '../../components/ProjectList'
import { layout } from '../../data/projects.json'

export default () => (
  <Page>
    <Dot to='/projects' />
    {
      layout.map(({ id, title, description, githubLink, demoLink }) => (
        <ProjectList
          id={id}
          key={id}
          title={title}
          description={description}
          githubLink={githubLink}
          demoLink={demoLink}
        />
      ))
    }
  </Page>
)

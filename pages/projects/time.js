import Page from '../../components/Page'
import Dot from '../../components/Dot'
import ProjectList from '../../components/ProjectList'
import { time } from '../../data/projects.json'

export default () => (
  <Page>
    <Dot to='/projects' />
    {
      time.map(({ id, title, description, githubLink, demoLink }) => (
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

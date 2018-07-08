import Wrapper from './Wrapper'
import Project from './Project'
import { projects } from '../data/projects.json'

export default () => (
  <Wrapper>
    {
      projects.map(({ id, title, description, githubLink, demoLink }) => (
        <Project
          id={id}
          key={id}
          title={title}
          description={description}
          githubLink={githubLink}
          demoLink={demoLink}
        />
      ))
    }
  </Wrapper>
)

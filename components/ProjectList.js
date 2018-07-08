import Layout from '../components/Layout'
import Dot from '../components/Dot'
import Project from '../components/Project'
import { projects } from '../data/projects.json'

export default () => (
  <Layout>
    <Dot to='/' />
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
  </Layout>
)

import Layout from '../../components/Layout'
import Dot from '../../components/Dot'
import Markdown from './acts-as-votable-gem-for-rails-apps.md'

export default () => (
  <Layout>
    <Dot to='/thoughts' />
    <Markdown />
  </Layout>
)

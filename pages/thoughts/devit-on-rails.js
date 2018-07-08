import Layout from '../../components/Layout'
import Dot from '../../components/Dot'
import Markdown from './devit-on-rails.md'

export default () => (
  <Layout>
    <Dot to='/thoughts' />
    <Markdown />
  </Layout>
)

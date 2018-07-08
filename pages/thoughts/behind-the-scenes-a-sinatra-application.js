import Layout from '../../components/Layout'
import Dot from '../../components/Dot'
import Markdown from './behind-the-scenes-a-sinatra-application.md'

export default () => (
  <Layout>
    <Dot to='/thoughts' />
    <Markdown />
  </Layout>
)
